<?php

$token = htmlentities($_POST["token"]);

if (!recaptcha($token)) {
    header("Location: /index.html?fail");
    exit;
} 

// Get values from the form

$nom = htmlentities($_POST['nom']);
$entreprise = htmlentities($_POST['entreprise']);
$email = htmlentities($_POST['email']);
$messages = htmlentities($_POST['message']);
 
$to = "alternance@elvis-garreau.fr";
$subject = "Formulaire site Alternance";
$message = " Nom: " . $nom . "<br><br> Entreprise: " . $entreprise . "<br><br> Email: " . $email . "<br><br> Message:<br>" . $messages;

$from = $email;
$headers = "From:" . $from . "<br>";
$headers = 'Content-type: text/html; charset=iso-8859-1'; 
 
if($email!="" && $nom!="" && $entreprise!="" && $message!="")
{
    mail($to,$subject,$message,$headers);
    header("Location: /index.html?succes");
}else{
  echo "Erreur! Veuillez Remplir les Champs Requis.";
}

function recaptcha($token) {
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $secret = "6LcvBr0ZAAAAAPe8okH7ARYbulEi9NKJcdtqFd2p";

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

?>