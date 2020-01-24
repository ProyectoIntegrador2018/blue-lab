<template>
  <v-card
    class="mx-auto mt-12" >
    <v-system-bar></v-system-bar>

    <v-toolbar flat color="transparent">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field v-model="search" label="Search tags" single-line></v-text-field>
    </v-toolbar>

    <v-card-text class="ml-1 pl-1">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="mx-1"> {{ keyword }}</v-chip>
    </v-card-text>


  </v-card>
</template>

<script>

  export default {
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