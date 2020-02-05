<template>
  <div class='home'>
    <NavBar></NavBar>
    <Header></Header>
    
    <CardItem></CardItem>
    <!-- <DetailsItem></DetailsItem> -->
    <!-- <CardItem></CardItem> -->
  </div>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
// import DetailsItem from '@/components/DetailsItem.vue'
import CardItem from '@/components/CardItem.vue'
//import Apialgo from '@/components/API_Items.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    NavBar,
    Header,
    CardItem
  },
  computed: mapState(['items','tags','title_cont_1','title_cont_2','title_cont_3','cont_1','cont_2','cont_3','distinct_tags','details_item','id_details','tag_search']),
  created(){
    this.$store.dispatch('loadHome')
    this.$store.dispatch('loadDistinctTags')
    //this.$store.dispatch('loadDetailsItem',this.$store.state.id_details) //pasar el id que del item que se quiere utilizar
    this.$store.dispatch('loadItems') 
    //this.$store.dispatch('loadItemsByTag','tag1') //llamada para buscar por tag   

  },
  methods: {
    // saludar: function (s) {
    //   console.log(s)
      //this.$store.dispatch('loadDetailsItem',this.$store.state.id_details) //pasar el id que del item que se quiere utilizar
      //this.$store.dispatch('loadItemsByTag',this.$store.state.tag_search) //llamada para buscar por tag   
      //this.$store.dispatch('eliminateDuplicate')

    // }
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;

  font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color:white;
}
</style>
