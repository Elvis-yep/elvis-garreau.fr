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
                        <input type="text" placeholder="Nom et Prénom" name="nom" id="nom" required> 
                        <input type="text" placeholder="Entreprise" name="entreprise" id="entreprise" required>
                        <input type="email" placeholder="E-mail" name="email" id="email" required>
                        <textarea type="text" placeholder="Ecrivez votre message" name="message" id="message" rows="10" cols="50" required></textarea>
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

<style lang="scss">
.back-contact {
    background-image: url("/images/moi-contact.png");
    background-repeat: no-repeat;
    background-size: auto 80%;
    background-position: bottom 0 left 5%;
}

.col1-contact {
    flex: 40%;
    order: 1;
}

.col2-contact {
    flex: 60%;
    order: 2;
}

.contact p {
    font-weight: 300;
    font-size: 18px;
    padding-bottom: 50px;
    text-align: left;
    line-height: 25px;
    span {
        font-weight: 500;
        font-style: italic;
    };
    span a {
        color: #333333;
        font-weight: 500;
        font-style: italic;
    }
}

$breakpoint-1: 1170px;

@media (max-width: $breakpoint-1) {
    .back-contact{        
        background-size: auto 70%;
    }

    .col1-contact {
        flex: 30%;
    }

    .col2-contact {
        padding-right: 30px;
    }
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
	background: rgba(255, 255, 255, 0.8);
    border-left: 6px solid #fdae10;
    border-bottom: 1px solid #fdae10;
    border-right: 0;
    border-top: 0;
    &:focus {
        outline: 0;
    };
    &::placeholder {
        font-size: 25px;
        font-family: fira-sans, sans-serif;
        font-weight: 500;
        font-style: italic;
    };
}

input {
	width: 100%;
	height: 50px;
	margin-top: 10px;
	margin-bottom: 15px;
	padding-left: 5px;
	background: rgba(255, 255, 255, 0.8);
    border-left: 6px solid #fdae10;
    border-bottom: 1px solid #fdae10;
    border-right: 0;
    border-top: 0;
    font-size: 25px;
    font-family: fira-sans, sans-serif;
    font-weight: 500;
    font-style: italic;
    color: #333333;
    &:focus {
        outline: 0;
    };
}

.sendButton {
	width: 120px;
	height: 30px;
	background: #fdae10;
	color: #ffffff;
    border:1px solid #ffffff;
    font-weight: 300;
    padding: 0;
    font-size: 20px;
    font-style: normal;
    line-height: 30px;
    outline: 0;
    border: 0;
    cursor: pointer;
    &:hover {
        background: #f2a100;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    };
}
</style>