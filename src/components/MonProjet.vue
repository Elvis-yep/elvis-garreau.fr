<template>
    <div class="back-mon-projet">
        <div class="container mon-projet" id="mon-projet">
            <h2><span class="mine">Mon</span>Projet de formation</h2>
            <div class="col-mon-projet">
                <div class="col1-mon-projet">
                    <p>
                        Après plus de 10 ans à travailler sur les métiers de l'image, 
                        dont les cinq dernières années comme indépendant, j'ai décidé 
                        de me relancer dans des études afin de devenir développeur 
                        d'applications. J'intègre en septembre <span>My Digital School</span> à 
                        Angers en <span>B3 Développeur Web.</span>
                    </p>
                    <p>
                        Le rythme de formation sera <span>d'une semaine en formation pour deux 
                        semaines en entreprise.</span> 
                    </p>
                    <p>
                        Cette formation conduit à l'obtention d'un titre de niveau 6 (RNCP) de <span>Concepteur Développeur d'Applications.</span>
                    </p>
                </div>
                <div class="col2-mon-projet"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MonProjet"
}
</script>

<style lang="scss">
.back-mon-projet {
    background-image: url("/images/DSC_3332.png");
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: bottom 0 right 10%;
}

$breakpoint-1: 1170px;

@media (max-width: $breakpoint-1) {
    .back-mon-projet {
        background-position: bottom 0 right 30px;
    }

    .col1-mon-projet {
        padding-left: 30px;
    }

    .col2-mon-projet {
        flex: 30%;
    }

    .mon-projet h2 {
        padding-left: 30px;
    }
}

.mon-projet p {
    font-weight: 300;
    font-size: 18px;
    padding-bottom: 30px;
    text-align: left;
    line-height: 24px;
    span {
        font-weight: 500;
    };
    &:last-child {
        padding-bottom: 80px;
    };
}

.col-mon-projet {
    display: flex;
}

.col1-mon-projet {
    flex: 60%;
    order: 1;
}

.col2-mon-projet {
    flex: 40%;
    order: 2;
}

</style>