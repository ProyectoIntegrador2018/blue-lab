<template>
  <div class='home'>
    <NavBar></NavBar>
    <Header></Header>
    <DetailsItem></DetailsItem>
    
  </div>

</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import DetailsItem from '@/components/DetailsItem.vue'


export default {
  name: 'home',
  components: {
    NavBar,
    Header,
     DetailsItem
    
  }
}
</script>

