<template>
    <div class="invers back-portfolio">
        <div class="portfolio" id="mes-realisations">
            <h2><span class="mine">Mes</span>Réalisations</h2>
            <div class="select-cat">
                <router-link to="/">Photo</router-link>
                <router-link to="/graphicDesign">Graphic Design</router-link>
                <router-link to="/video">Vidéo</router-link>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "MesRealisations"
}
</script>

<style lang="scss">
.portfolio h2 {
    text-align: center;
}

.portfolio {
    transition: all 0.5s ease-in;
}

.select-cat, .select-galerie {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
}

.select-cat a {
    font-weight: 300;
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    padding-right: 15px;
    transition: all 0.4s ease-in-out;
    &.router-link-exact-active {
        text-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.8);
    }
    &:hover {
        text-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.8);
    }
    &::after {
        content: ".";
        padding-left: 15px;
        font-weight: 500;
        font-size: 30px;
        position: relative;
        top: -4px;
    }
    &:last-child {
        padding-right: 0;
    }
    &:last-child::after {
        content: "";
    }
}

.portfolio button:hover {
    text-shadow:0 0 3px #3b3b3b;
}

.portfolio button:focus {
    outline: 0;
}
</style>