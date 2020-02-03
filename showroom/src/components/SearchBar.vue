<template>
  
  <div class="searchBar-space">
    <div class="searchBar">
      <v-text-field v-model="search" label="Search tags"  outlined rounded solo clearable></v-text-field>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="badge-foreground">
             <a href="#searchAnchor" class="badge badge-pill badge-light" v-for="(tag,i) in tags" :key="i"  @click="searchGenerated()">{{tag}}</a>
            <!-- <v-chip v-for="(tag, i) in tags" :key="i" class="mx-1" color=#5576d1 > {{ tag }}</v-chip> -->
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
 // import {mapState} from 'vuex';

  export default {
    name: "SearchBar",
    data: () => ({
      items: [
        {tag: 'Financiero'},
        {tag: 'Comercial'},
        {tag: 'Educativo'},
        {tag: 'Administrativo'},
        {tag: 'Transporte'},
        {tag: 'Tag1'},
        {tag: 'Tag2'},
        {tag: 'Tag3'},
        {tag: 'Tag4'},
        {tag: 'Tag5'},
        {tag: 'Tag6'},
        {tag: 'Tag7'},
        {tag: 'Tag8'},
      ],
      search: '',
    }),

    computed:{

   // mapState(['tags']),


    tags () {
        if (!this.search) return []

        const tags = []

        for (const search of this.searching) {
          tags.push(search.tag)
        }

        return tags
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.tag.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
    methods: {
      searchGenerated(){
        alert('Se genera una busqueda para reorganizar los proyectos!')
      }  
    },
    
      
  }
  
</script>


<style >
  v-chip{
    color:#ffffff;
    background-color: #5576d1 !important;
  }

  .badge-foreground{
    position: absolute;
    padding:5px 10px;
    animation: fadeIn 5s ease;
  }

  .badge{
  margin: 1px;
  font-size: 130% !important;
  }

  .badge-primary{
    background-color: #5576d1 !important;
  }

  .badge-primary:hover{
    background-color: #7e9df2 !important;
  }

  .badge-light{
    color:#5576d1 !important;
    border-color: #5576d1;
  }

 /* .searchBar-space{
    margin-bottom: 20px;
  }*/

</style>