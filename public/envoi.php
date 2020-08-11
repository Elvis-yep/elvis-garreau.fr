<?php

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
    header("Location: /merci.html?succes");
}else{
  echo "Erreur! Veuillez Remplir les Champs Requis.";
}

?>