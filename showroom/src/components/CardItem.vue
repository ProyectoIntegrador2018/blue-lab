<template>
  <div class="cardsItem">
  <v-card  class="mx-auto" color=#5576d1 >
  <v-spacer></v-spacer>
    <v-container fluid>
      <v-row dense>
       
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex" >
          
          <v-card>
              <v-img :src="card.src" height="300px">
              <!-- <v-flex xs12 align-end flexbox> -->
               <v-card-title class="white--text" >{{card.title}}</v-card-title> 
             <!-- </v-flex> -->
              <v-card-subtitle > Subtitulo de proyecto</v-card-subtitle>
              </v-img>

              <v-card-actions>
              <v-spacer></v-spacer>

              <!-- Make array -->
              <v-chip color=#5576d1 text-color=#ffffff x-small class="mx-1" @click="tipo(card.chip)"> {{card.chip}} </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>


            </v-card-actions>
            

              

            

          </v-card>
        </v-col>
    
      </v-row>
    </v-container>
  </v-card>
  </div>
 
   

    <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

<!--     <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
 -->



</template>


<script>
  export default {
    name: "CardItem",
    data: () => ({
      cards: [
        { title: 'Proyecto 1', src: require('@/assets/Proy1.png'), flex: 3, chip:"Financiero"},
        { title: 'Proyecto 2', src: require('@/assets/Proy2.png'), flex: 3, chip:"Comercial"},
        { title: 'Proyecto 3', src: require('@/assets/Proy3.png'), flex: 3, chip:"Educativo"},
        { title: 'Proyecto 4', src: require('@/assets/Proy4.png'), flex: 3, chip:"Administrativo"},
        { title: 'Proyecto 3', src: require('@/assets/Proy3.png'), flex: 3, chip:"Administrativo"},
        { title: 'Proyecto 4', src: require('@/assets/Proy4.png'), flex: 3, chip:"Educativo"},
        { title: 'Proyecto 1', src: require('@/assets/Proy1.png'), flex: 3, chip:"Comercial"},
        { title: 'Proyecto 2', src: require('@/assets/Proy2.png'), flex: 3, chip:"Financiero"}

      ],
    }),

    methods:{
      tipo(msg){
        alert('Selecionaste '+msg+' !')
      }
    }
  }
</script>


<style scoped src="vuetify/dist/vuetify.min.css">

/*
   .vcard{
  float:left !important;
  display:inline-block;
  position:relative;
  top: -50px;
}

.cardItem{
  display: flex;
  flex-direction: row;

}
*/
</style>