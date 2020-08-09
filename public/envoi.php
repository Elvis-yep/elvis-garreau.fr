<?php

// Get values from the form

$nom = htmlentities($_POST['nom']);
$entreprise = htmlentities($_POST['entreprise']);
$email = htmlentities($_POST['email']);
$message = htmlentities($_POST['message']);
 
$to = "alternance@elvis-garreau.fr";
$subject = "Formulaire site Alternance";
$message = " Nom: " . $nom . "\r\n\r\n Entreprise: " . $entreprise . "\r\n\r\n Email: " . $email . "\r\n\r\n Message:\r\n" . $message;
$message .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 

$from = "$email";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if($email!="" && $nom!="" && $entreprise!="" && $message!="")
{
    mail($to,$subject,$message,$headers);
    header("Location: /index.html?success");
}else{
  echo "Erreur! Veuillez Remplir les Champs Requis.";
}