<template>
  <div class='api_algo'>
    <h1>hello</h1>
    <ul v-for="(keyword,i) in items" :key="i"  >
      {{keyword.title}}
      <li >
      {{keyword._id}}
      </li>
    </ul>
    
  </div>

</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';

export default {
  name: 'api_algo',
  components: {
  },
  computed: mapState(['items']),
  created(){
    this.$store.dispatch('loadItems')
  }

}

</script>

