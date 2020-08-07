<template>
    <div class="pfPhoto container">
    <h3>Voici une selection de différents type de photographie que je réalise</h3>
    <div class="select-cat">
        <button @click="changeCategorie('corporate')">Corporate</button>
        <button @click="changeCategorie('workingArt')">Working Art</button>
        <button @click="changeCategorie('divers')">Divers</button>
    </div>
    <div class="galerie-photo corporate" v-show="categorie === 'corporate'">
        <figure>
            <a href="images/large/photo-10.jpg" data-lightbox="photo" data-title="Corporate - séance de travail">
            <img src="images/miniatures/photo-10.jpg" alt="">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-11.jpg" data-lightbox="photo" data-title="Corporate - séance de travail">
            <img src="images/miniatures/photo-11.jpg" alt="Corporate - séance de travail">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-12.jpg" data-lightbox="photo" data-title="Corporate - séance de travail">
            <img src="images/miniatures/photo-12.jpg" alt="Corporate - séance de travail">
            </a>
        </figure>
    </div>
    <div class="galerie-photo divers" v-show="categorie === 'divers'">
        <figure>
            <a href="images/large/photo-16.jpg" data-lightbox="photo" data-title="Salon de coiffure">
            <img src="images/miniatures/photo-16.jpg" alt="Salon de coiffure">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-17.jpg" data-lightbox="photo" data-title="Salon de coiffure">
            <img src="images/miniatures/photo-17.jpg" alt="Salon de coiffure">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-18.jpg" data-lightbox="photo" data-title="Salon de coiffure">
            <img src="images/miniatures/photo-18.jpg" alt="Salon de coiffure">
            </a>
        </figure>      
        <figure>
            <a href="images/large/photo-8.jpg" data-lightbox="photo" data-title="Packshot - Montre">
            <img src="images/miniatures/photo-8.jpg" alt="montre">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-9.jpg" data-lightbox="photo" data-title="Packshot - Montre">
            <img src="images/miniatures/photo-9.jpg" alt="montre">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-13.jpg" data-lightbox="photo" data-title="Détails & Lumière">
            <img src="images/miniatures/photo-13.jpg" alt="Détails & Lumière">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-14.jpg" data-lightbox="photo" data-title="Ombre & Lumière">
            <img src="images/miniatures/photo-14.jpg" alt="Ombre & Lumière">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-15.jpg" data-lightbox="photo" data-title="Ombre & Lumière">
            <img src="images/miniatures/photo-15.jpg" alt="Ombre & Lumière">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-19.jpg" data-lightbox="photo" data-title="See the Light">
            <img src="images/miniatures/photo-19.jpg" alt="See the Light">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-23.jpg" data-lightbox="photo" data-title="Portrait sous la neige">
            <img src="images/miniatures/photo-23.jpg" alt="Portrait sous la neige">
            </a>
        </figure>
    </div>
    <div class="galerie-photo workingArt" v-show="categorie === 'workingArt'">
        <figure>
            <a href="images/large/photo-20.jpg" data-lightbox="photo" data-title="The art of Tatoo">
            <img src="images/miniatures/photo-20.jpg" alt="The art of Tatoo">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-21.jpg" data-lightbox="photo" data-title="The art of Tatoo">
            <img src="images/miniatures/photo-21.jpg" alt="The art of Tatoo">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-22.jpg" data-lightbox="photo" data-title="The art of Tatoo">
            <img src="images/miniatures/photo-22.jpg" alt="The art of Tatoo">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-3.jpg" data-lightbox="photo" data-title="grisaille - peinture sur verre">
            <img src="images/miniatures/photo-3.jpg" alt="grisaille - peinture sur verre">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-4.jpg" data-lightbox="photo" data-title="vitraille">
            <img src="images/miniatures/photo-4.jpg" alt="vitraille">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-5.jpg" data-lightbox="photo" data-title="vitraille">
            <img src="images/miniatures/photo-5.jpg" alt="vitraille">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-6.jpg" data-lightbox="photo" data-title="portrait">
            <img src="images/miniatures/photo-6.jpg" alt="portrait">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-7.jpg" data-lightbox="photo" data-title="portrait">
            <img src="images/miniatures/photo-7.jpg" alt="portrait">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-1.jpg" data-lightbox="photo" data-title="StringArt">
            <img src="images/miniatures/photo-1.jpg" alt="photo de string art">
            </a>
        </figure>
        <figure>
            <a href="images/large/photo-2.jpg" data-lightbox="photo" data-title="StringArt détails">
            <img src="images/miniatures/photo-2.jpg" alt="stringart détails">
            </a>
        </figure>
    </div>
</div>
</template>

<script>
export default {
    name: "Photo",
    data() {
        return {
            categorie: 'corporate'
        };
    },
    methods: {
        changeCategorie(categorie){
            this.categorie = categorie;
        }
    }
}
</script>

<style lang="scss">
.divers, .corporate, .workingArt {
    display: flex;    
    flex-wrap: wrap;
    justify-content: left;
    padding-bottom: 80px;
}

.pfPhoto h3 {
    text-align: center;
    font-weight: 300;
    color: #ffffff;
    font-size: 20px;
    padding: 30px 0 50px 0;
}



.galerie-photo figure {
    width: 33.333333%;
    overflow: hidden;
    place-items: center;
}

.galerie-photo img {
    display: block;
    width: 100%;
    transition: all .5s ease-in-out;
    transform: scale(1.02);
}

.galerie-photo img:hover {
    transform: scale(1.1) rotate(3deg);
}
</style>