<template>
    <footer>
        <div class="soc">
            <h3>Trouvez-moi sur les réseaux sociaux</h3>
            <div class="ul-content">
                <ul>                    
                    <li><a href="https://www.instagram.com/theyepstudio/" class="picto-soc" target="_blank" title="Instagram"><img src="/images/picto-insta.svg" alt="logo Instagram"></a></li>
                    <li><a href="https://fr.pinterest.com/elvis_garreau/mes-r%C3%A9alisations/" target="_blank" title="Pinterest"><img src="/images/picto-pinterest.svg" alt="logo pinterest"></a></li>
                    <li><a href="https://www.behance.net/Elvis-Garreau" class="picto-soc" target="_blank" title="Behance"><img src="/images/picto-behance.svg" alt="logo behance"></a></li>
                </ul>
            </div>
        </div>
        <div class="piedPage">
            <div>
                <p>31 rue Toussaint<br>
                49100 - Angers</p>
            </div>
            <div>
                <p>Téléphone : 07 56 80 24 75<br>
                E-mail : contact@elvis-garreau.fr</p>
            </div>
            <div>
                <p>Copyright 2020 - Elvis Garreau<br>
                Tout droits réservés</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.piedPage {
    clear: both;
    margin-left: auto;
    margin-right: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
    -ms-flex-pack: center;
	justify-content: center;
	background: #fdae10;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 40px;;
}

.piedPage div {
	display: block;
    width: 250px;
}

.piedPage div p {
	text-align:center;
	margin: 0;
    color: #ffffff;
}

.soc {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: #fdae10;
}

.soc h3 {
    flex: 100%;
    order: 1;
    padding-top: 30px;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
}

.ul-content {
    flex: 100%;
    order: 2;
    text-align: center;
}

.soc ul {
    display: inline-block;
    margin: 20px auto;
}

.soc ul li {
    display: table-cell;
    padding: 0 20px;
    color: #ffffff;
    font-weight: 400;
}

.soc ul li img {
    padding-top: 0;
    height: 40px;
    opacity: 1;
    vertical-align: middle;
    transition: all .5s ease;
}

.soc ul li img:hover {
    transform: rotate(-20deg);
}
</style>