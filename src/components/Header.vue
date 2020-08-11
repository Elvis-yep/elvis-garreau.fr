<template>
    <header id="accueil">
      <div class="contenu-header">
          <h1 class="hello">Bonjour, je suis <span>Elvis Garreau</span></h1>
          <h2 class="hello2">Je recherche une Alternance en tant que Développeur Web</h2>
      </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
header {
    background-image: url("/images/header-2.jpg");
    background-position: center;
    width: 100%;
    height: 750px;
}

.contenu-header {
    width: 100%;
    height: 750px;
}

.hello {
    font-family: korolev-condensed, sans-serif;
    font-weight: 700;
    text-align: right;
    color: #ffffff;
    font-size: 50px;
    position: absolute;
    right: 10%;
    top: 290px;
    width: 550px;
    span {
    font-family: zooja-pro,sans-serif;
    font-weight: 300;
    border: solid 1px #fdae10;
    color: #ffffff;
    padding: 11px 20px 3px 13px;
    margin-left: 10px;
    font-size: 60px;
    }
}

.hello2 {    
    font-family: korolev-condensed, sans-serif;
    font-weight: 300;
    text-align: right;
    color: #ffffff;
    font-size: 25px;
    position: absolute;
    right: 10%;
    top: 290px;
    width: 550px;
}

$breakpoint-1: 1170px;
$breakpoint-mobile: 900px;

@media (max-width: $breakpoint-mobile) {
    header {
        height: 400px;
        width: 100%;
        background-size: auto 100%;
    }
    .hello {
        font-size: 25px;
        right: 30px;
        top: 120px;
        width: 200px;
        span {
        font-size: 35px;
        line-height: 70px;
        }
    }
    .hello2 {
        width: 200px;
        font-size: 20px;
        top: 150px
    }
}

@media (max-width: $breakpoint-1) {
    .hello, .hello2 {
       right: 30px;
    }
}


</style>