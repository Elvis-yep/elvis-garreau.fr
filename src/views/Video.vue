<template>
    <div class="pfVideo container">
        <h3>- Vidéo de présentation pour une recherche d'alternance -</h3>
        <iframe width="600" height="337" src="https://www.youtube.com/embed/XfiD0K0KGOE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br><br><br><br>
        <h3>- Vidéo de présentation pour une recherche d'alternance -</h3>
        <iframe width="600" height="337" src="https://www.youtube.com/embed/V2cm7Q11wTE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br><br><br><br>
        <h3>- Animation du logo Quotex - <span>le reste de la vidéo a été tourné et monté par Quotex</span> -</h3>
        <iframe width="600" height="337" src="https://www.youtube.com/embed/xzBw4esFINA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br><br><br><br>
        <h3>- Vidéo de présentation pour un atelier de vitrail -</h3>
        <iframe width="600" height="337" src="https://www.youtube-nocookie.com/embed/lStbikfbu0g?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: "Video"    
}
</script>

<style lang="scss">

.pfVideo {
    text-align: center;
}

.pfVideo h3 {
    padding-top: 15px;
    padding-bottom: 15px;
    span {
        font-style: italic;
        font-size: 17px;
    }
}

iframe:last-child {
    padding-bottom: 80px;
}

</style>