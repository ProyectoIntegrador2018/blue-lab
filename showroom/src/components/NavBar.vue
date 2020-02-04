<template>
    <div class="topNavBar">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <img class ="logo-img" src="../assets/BPLogoTAG_RGB-72dpi_Ver01-Blanco.png">
      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(tag,i) in tags" :key="i">
            <a class="nav-link js-scroll-trigger" href="#searchAnchor" @click="navGenerated(tag)">{{tag}}</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
      </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
  name: 'NavBar',
  mounted(){
    window.addEventListener("scroll", function(){
      const nav = document.querySelector('#mainNav');
      if (this.scrollY > 80) {
        nav.style.backgroundImage = "url(/img/wallpaper.57a95dba.jpg)";
      }
      else {
        nav.style.backgroundImage = 'none';
      // nav.style.backgroundColor= '#2c3e5094';
      }
    })
  },
  computed:mapState(['tags']),

  methods:{
    navGenerated(tag){
      this.$store.dispatch('loadItemsByTag',tag)
    }
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 5px;
  }
  nav.scroll {
    background-color: red;
       height: 12%;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #mainNav {
  /* background-color: #2c3e5094; */
     height: 12%;
   
  }
  
  #mainNav .navbar-toggler {
    font-size: 0px;
    right: 0;
    padding: 5px;
   
    text-transform: uppercase;
    color: white;
    border: 0;
    background-color: #333366;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  #mainNav .navbar-brand {
    color: #0370fe;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
    color: #0370fe;
  }
  
  #mainNav .navbar-nav .nav-item .nav-link {
    font-size: 90%;
    font-weight: 400;
    padding: 10px;
    letter-spacing: 1px;
    color: white;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  
  #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #333366;
  }

  .logo-img{
    display: flex;
    width: 120px;
    height: 70px;
    
  }
  
  @media (min-width: 992px) {
    #mainNav {
      padding-top: 25px;
      padding-bottom: 25px;
      transition: padding-top 0.3s, padding-bottom 0.3s;
      border: none;
     
     
    }
    #mainNav .navbar-brand {
      font-size: 1.75em;
      transition: all 0.3s;
    }
    #mainNav .navbar-nav .nav-item .nav-link {
      padding: 1.1em 1em !important;
    }
    #mainNav.navbar-shrink {
      padding-top: 0;
      padding-bottom: 0;
    
    }
    #mainNav.navbar-shrink .navbar-brand {
      font-size: 1.25em;
      padding: 12px 0;
    }
  }

</style>