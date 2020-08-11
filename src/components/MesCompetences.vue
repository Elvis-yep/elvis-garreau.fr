<template>
    <div class="invers back-comp">
        <div id="mes-competences" class="container competences">
            <h2><span class="mine">Mes</span>Compétences</h2>
            <div class="col">
                <div class="col-comp-1">
                    <h3 id="graphic-design">Graphic Design</h3>
                    <p>Plus de 10 ans d'expérience en tant que graphiste. Maitrise des logiciels Photopshop, Illustrator et InDesign</p>
                    <h3 id="web-design">Web design</h3>
                    <p>Réalisation de maquettes de sites web responsives via les logiciels Adobe Photoshop et XD</p>
                    <h3 id="dev-front">développement front</h3>
                    <p>Connaissance des langages HTML, CSS, PHP et JavaScript, j'ai développé ce site avec Vue.js.</p>
                </div>
                <div class="col-comp-2">
                    <h3 id="photo">Photographie</h3>
                    <p>Plus de 10 ans d'expérience comme photographe, couverture d'évennements, portrait corporate, packshot etc.</p>
                    <h3 id="video">Vidéo</h3>
                    <p>Je fais de la prise de vues, du montage et du motion design avec les logiciels Première Pro et After Effect.</p>                
                    <h3 id="relation-client">relation client</h3>
                    <p>Indépendant depuis 5 ans, je suis habitué à travailler en lien étroit avec les clients. Ecoute et conseils.</p>
                </div>
                <div class="col-comp-3">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MesCompetences"
}
</script>

<style lang="scss">



.back-comp {
    background-image: url("/images/DSC_3313.png");
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: bottom 0 left 10%;
}

.competences {
    padding-bottom: 50px;
}

.competences h2{
    text-align: right;
    padding-bottom: 70px;
}

.competences h3 {
    font-size: 25px;
    font-family: korolev-condensed, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #333333;
    line-height: 50px;
}

.col-comp-1 {
    flex: 30%;
    order: 2;
    padding-right: 20px;
}

.col-comp-2 {
    flex: 30%;
    order: 3;
}

.col-comp-3 {
    flex: 30%;
    order: 1;
}

.col-comp-1 p, .col-comp-2 p {
    padding-left: 70px;
    padding-bottom: 30px;
    font-size: 17px;
    line-height: 23px;
    color: #333333;
}

$breakpoint-1: 1500px;
$breakpoint-2: 1200px;
$breakpoint-mobile: 900px;

@media (max-width: $breakpoint-1) {
    .back-comp {
        background-size: auto 80%;
        background-position: bottom 0 left 30px;
    }
}

@media (max-width: $breakpoint-2) {
    .back-comp {
        background-image: none;
    }

    .competences h2 {
        padding-right: 30px;
    }

    .col-comp-1 {
        flex: 45%;
        padding-left: 20px;
    }

    .col-comp-2 {
        flex: 45%;
        padding-right: 20px;
    }

    .col-comp-3 {
        flex: 0%;
    }
}

@media (max-width: $breakpoint-mobile) {
    .back-comp {
        background-image: none;
    }

    .competences h2 {
        padding-left: 30px;
        text-align: center;
    }

    .col-comp-1 {
        flex: 100%;
        padding: 0 30px;
    }

    .col-comp-2 {
        flex: 100%;
        padding: 0 20px;
    }

    .col-comp-3 {
        flex: 0%;
    }
}

#graphic-design::before {
    content: url("/images/picto-graphic-design.png");
    vertical-align: middle;
    padding-right: 20px;
}

#web-design::before {
    content: url("/images/picto-web-design.png");
    vertical-align: middle;
    padding-right: 20px;
}

#dev-front::before {
    content: url("/images/picto-dev.png");
    vertical-align: middle;
    padding-right: 20px;
}

#photo::before {
    content: url("/images/picto-photo.png");
    vertical-align: middle;
    padding-right: 20px;
}

#video::before {
    content: url("/images/picto-video.png");
    vertical-align: middle;
    padding-right: 20px;
}

#relation-client::before {
    content: url("/images/picto-relation-client.png");
    vertical-align: middle;
    padding-right: 20px;
}
</style>