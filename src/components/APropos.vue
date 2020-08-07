<template>
    <div class="back-a-propos" id="a-propos">
        <div class="container">
            <div class="col">
                <div class="col1">
                    <h1>A propos de<span class="about">Moi</span></h1>
                    <p class="description-1">Graphiste freelance depuis 2015, je suis spécialisé dans la création d'identité visuelle, 
                        la photographie et la vidéo (captation, montage et motion design).
                    </p>
                    <p class="description">Je fais de la création graphique aussi bien pour le web que pour du print et mon 
                        but est d'harmoniser chacun des supports de communication d'une entreprise pour créer une identité forte.
                    <br>
                    <br>
                    Pour moi le design et le développement sont clairement 
                        complémentaires. Mon objectif avec cette formation est de devenir un développeur très polyvalent, 
                        connaissant aussi bien les différents langages de programmation que le monde du design.
                    </p>
                    <div class="infos">
                        <div id="comp1"><p>31, rue Toussaint<br>49100<br>Angers</p></div>
                        <p id="comp2">07 56 80 24 75</p>
                        <p><a href="mailto: alternance@elvis-garreau.fr" id="comp3">alternance@elvis-garreau.fr</a></p>
                        <p id="comp4">1 enfant</p>
                    </div>
                </div>
                <div class="col2">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "APropos"
}
</script>

<style>

.col {
    display: flex;
    flex-wrap: wrap;
}

.col1 {
    flex: 60%;
    order : 1;
    padding-bottom: 60px;
}

.col2 {
    flex: 40%;
    order : 2;
}

.back-a-propos {
    background-image: url("/images/a-propos-moi.png");
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: bottom 0 right 20%;
}

.col2 img {
    max-width: 100%;
    padding-right: 40px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    filter: grayscale(100%);
    vertical-align: middle;
}

/* description */

.description-1 {
    font-weight: 500;
    font-size: 18px;
    padding-bottom: 20px;
    text-align: left;
}

.description {
    font-weight: 300;
    font-size: 18px;
    padding-bottom: 50px;
    text-align: left;
}

.description br {
    height: 20px;
}

/* Compétences */

.infos p, .infos a {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 15px;
    line-height: 20px;
    color: #000000;
}



#comp1::before {
    content: url("/images/picto-adresse.png");
    padding-right: 15px;
    vertical-align: middle;
    height: auto;
    float: left;
}

#comp2::before {
    content: url("/images/picto-tel.png");
    padding-right: 15px;
    vertical-align: middle;
    height: auto;
}

#comp3::before {
    content: url("/images/picto-mail.png");
    padding-right: 15px;
    vertical-align: middle;
    height: auto;
}

#comp4::before {
    content: url("/images/picto-famille.png");
    padding-right: 15px;
    vertical-align: middle;
    height: auto;
}
</style>