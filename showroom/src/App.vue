<template>
  <div class='home'>
    <NavBar></NavBar>
    <Header></Header>
    <button v-on:click="saludar">Saludar</button>
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
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    NavBar,
    Header,
    CardItem
  },
  computed: mapState(['items','tags','title_cont_1','title_cont_2','title_cont_3','cont_1','cont_2','cont_3','distinct_tags','details_item']),
  created(){
    this.$store.dispatch('loadHome')
    this.$store.dispatch('loadDistinctTags')
    //this.$store.dispatch('loadDetailsItem','5e327f597df5a93624913e5c') //pasar el id que del item que se quiere utilizar
    this.$store.dispatch('loadItems') 
    //this.$store.dispatch('loadItemsByTag','tag1') //llamada para buscar por tag   

  },
  methods: {
    saludar: function () {
      
      //this.$store.dispatch('eliminateDuplicate')

    }
  }
}
</script>
