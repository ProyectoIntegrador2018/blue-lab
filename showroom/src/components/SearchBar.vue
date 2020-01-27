<template>
  
  <div>
    <div class="searchBar">


      <v-text-field v-model="search" label="Search tags"  outlined rounded solo clearable></v-text-field>

    </div>
    <v-chip v-for="(keyword, i) in keywords" :key="i" class="mx-1" color=#5576d1 > {{ keyword }}</v-chip>
  
</div>
</template>

<script>

  export default {
    name: "SearchBar",
    data: () => ({
      items: [
        {title: 'Financiero',keyword: 'Financiero'},
        {title: 'Comercial',keyword: 'Comercial',},
        {title: 'Educativo',keyword: 'Educativo',},
        {title: 'Administrativo',keyword: 'Administrativo',},
        {title: 'Transporte',keyword: 'Transporte',},
      ],
      search: '',
    }),

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
  }
</script>


<style >
  v-chip{
    color:#ffffff;
    background-color: #5576d1 !important;
  }

/*  .v-imput_slot{
    border-radius: 50px 50px 50px 50px;
    background-color:#ffffff;
  }*/

/*  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__slot {
  padding: 0;
}*/

</style>