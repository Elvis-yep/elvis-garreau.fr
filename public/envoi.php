<?php

// Get values from the form
$token = htmlentities($_POST["token"]);

if (!recaptcha($token)) {
    header("Location: /contact.html?fail");
}

$nom = htmlentities($_POST['nom']);
$entreprise = htmlentities($_POST['entreprise']);
$email = htmlentities($_POST['email']);
$message = htmlentities($_POST['message']);
 
$to = "alternance@elvis-garreau.fr";
$subject = "Formulaire site Alternance";
$message = " Nom: " . $nom . "\r\n\r\n Entreprise: " . $entreprise . "\r\n\r\n Email: " . $email . "\r\n\r\n Objet: " . $objet . "\r\n\r\n Message:\r\n" . $message;
 
$from = "$email";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if($email!="" && $nom!="" && $entreprise!="" && $message!="")
{
    mail($to,$subject,$message,$headers);
    header("Location: /merci.html?success");
}else{
  echo "Erreur! Veuillez Remplir les Champs Requis.";
}

function recaptcha($token) {
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $secret = "6LfNobwZAAAAAGAwiLixKGvGsQ_Xq4Hh8zgoVfAG";

    $curl_session = curl_init($url);
    $opt_post = curl_setopt($curl_session, CURLOPT_POST, TRUE);
    $opt_fields = curl_setopt($curl_session, CURLOPT_POSTFIELDS, [
        "secret" => $secret,
        "response" => $token
    ]);
    $opt_return = curl_setopt($curl_session, CURLOPT_RETURNTRANSFER, TRUE);
    $curl_exec = curl_exec($curl_session);
    $curl_content = curl_multi_getcontent($curl_session);

    curl_close($curl_session);
    
    $json = json_decode($curl_content,1);
    
    return $json["success"];
}