<template>    
  <ul class="navbar-list">
    <li class="nav-item"><a class="nav-link" :href="url">{{ linkName }}</a></li>
  </ul>
</template>

<script>
export default {
    name: "NavBar",
    props: {
      url: {
        type: String,
        required: true
      },
      linkName: {
        type: String,
        required: true
      }
    }
}
</script>
    
<style>

.navbar {
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    height: 50px;
    line-height: 50px;
    z-index: 999;
}

.titre-site{
  float: left;
  justify-content: flex-start;
    font-family: zooja-pro,sans-serif;
    font-weight: 300;
    padding-left: 40px;
    color: #ffffff;
    font-size: 40px;
}

.navbar-list {
  float: right;
}

/*
.nav-item {
    display: table-cell;
    padding-right: 50px;
    color: #fdae10;
    font-weight: 300;
    font-size: 17px;
    float: left;
}
*/

.nav-item {
    display: table-cell;
    padding-right: 50px;
    color: #fdae10;
    font-weight: 300;
    font-size: 17px;
}

.nav-link {
  
    font-size: 16px;
    font-weight: 200;
    text-decoration: none;
    color: #ffffff;
    transition: all .4s ease;
}

.nav-link:hover {
    border-bottom: solid 3px #fdae10;
    padding-bottom: 14px;
}
</style>