<template>
    <div class="back-contact">
        <div class="container contact col" id="rencontrons-nous">
            <div class="col1-contact">
            </div>
            <div class="col2-contact">
                <h2>Rencontrons<span class="about">Nous</span></h2>
                <p>Mon profile vous interesse ?<br>
                N'hésitez pas à me contacter via ce formulaire.<br>
                Vous pouvez aussi me contacter par téléphone au : <span>07 56 80 24 75</span><br>
                Ou via cette adresse mail : <span><a href="mailto: alternance@elvis-garreau.fr">alternance@elvis-garreau.fr</a></span>
                </p>
                <div class="formulaire">
                    <form name="form1" id="formulairedecontact" method="post" action="envoi.php">
                        <input type="text" placeholder="Nom et Prénom" name="nom-prenom" id="nom-prenom" required> 
                        <input type="text" placeholder="Entreprise" name="entreprise" id="entreprise" required>
                        <input type="email" placeholder="E-mail" name="email" id="email" required>
                        <textarea type="text" placeholder="Ecrivez votre message" name="message" id="message" rows="10" cols="50" required></textarea>
                        <input type="hidden" id="recaptcha-token" name="token" />
                        <input class="sendButton" type="submit" name="envoi" value="Envoyer">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style>
.back-contact {
    background-image: url("/images/moi-contact.png");
    background-repeat: no-repeat;
    background-size: auto 80%;
    background-position: bottom 0 left 10%;
}

.col1-contact {
    flex: 40%;
    order: 1;
}

.col2-contact {
    flex: 60%;
    order: 2;
}

.contact {
    min-height: 600px;
}

.formulaire {
    padding-bottom: 100px;
    text-align: center;
}

form {
    padding-top: 50px;
    display: block;
}

form p{
    font-size: 17px;
}

textarea {
	width: 100%;
	max-height: 200px;
	margin-top: 10px;
    margin-bottom: 5px;
    resize: none;
	padding-left: 5px;
	background: #ffffff;
    border-left: 6px solid #fdae10;
    border-bottom: 1px solid #fdae10;
    border-right: 0;
    border-top: 0;
}

textarea:focus {
	outline: 0;
}

input {
	width: 100%;
	height: 80px;
	margin-top: 10px;
	margin-bottom: 15px;
	padding-left: 5px;
	background: #ffffff;
    border-left: 6px solid #fdae10;
    border-bottom: 1px solid #fdae10;
    border-right: 0;
    border-top: 0;
    font-size: 30px;
    font-family: fira-sans, sans-serif;
    font-weight: 500;
    font-style: italic;
    color: #333333;
}

textarea::placeholder {
    font-size: 30px;
    font-family: fira-sans, sans-serif;
    font-weight: 500;
    font-style: italic;

}

input:focus {
	outline: 0;
}

.sendButton {
	width: 120px;
	height: 30px;
	background: #fdae10;
	color: #ffffff;
	border:1px solid #ffffff;
}

.sendButton:hover {
	background: #f2a100;
}
</style>