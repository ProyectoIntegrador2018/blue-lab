<template>
  <div class='home'>
    <NavBar></NavBar>
    <Header></Header>
    <DetailsItem></DetailsItem>
    <CardItem></CardItem>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import DetailsItem from '@/components/DetailsItem.vue'
import CardItem from '@/components/CardItem.vue'

export default {
  name: 'home',
  components: {
    NavBar,
    Header,
     DetailsItem,
     CardItem
  }
}
</script>



