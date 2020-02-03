<template>


<div class="container-fluid">

  <div class="row rowCards" >
    <div class="card-group" id="searchAnchor">

      <div class="col-4 nopadding" v-for="card in cards" :key="card.title">
        <div class="card" >
          <img :src="card.src" class="card-img h-100" alt="...">
            <div class="card-img-overlay">
              <div class="overlay">
                <h1 class="card-title">{{card.title}}</h1>
                <p class="card-text">{{card.subtitle}}</p>
              </div>
              <div class="badge-position">
                <a href="#" class="badge badge-pill badge-primary">{{card.tags}}</a>
             <!--<a href="#" class="badge badge-pill badge-light">Tag</a>
                <a href="#" class="badge badge-pill badge-light">Tag</a>
                <a href="#" class="badge badge-pill badge-light">Tag</a> -->
                   <button  v-on:click="isDetail = !isDetail" class="btn btn-primary"> detalles </button>
              </div>
           
            </div>
        </div>
      </div>
    </div>
  </div>

<DetailsItem v-show="isDetail" class="detailsItem"></DetailsItem>

</div>


    

<!--  Seccion para cargar datos

  src='@/assets/Proy1.png'

    <v-container fluid>
      <v-row dense>
       
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex" >
          
          <v-card>
              <v-img :src="card.src" height="300px">
              <v-flex xs12 align-end flexbox>
               <v-card-title  >{{card.title}}</v-card-title> 
            </v-flex>
              <v-card-subtitle > Subtitulo de proyecto</v-card-subtitle>
              </v-img>

              <v-card-actions>
              <v-spacer></v-spacer>

              Make array
              <v-chip color=#5576d1 text-color=#ffffff x-small class="mx-1" @click="tipo(card.chip)"> {{card.chip}} </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>
              <v-chip color=#ffffff text-color=#5576d1 x-small class="mx-1" outlined> Tag </v-chip>


 -->
  
   

</template>


<script>
  import DetailsItem from '@/components/DetailsItem.vue'


  export default {
    name: "CardItem",
    data: () => ({
      cards: [

        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"}
        

      ],
      isDetail: false
    }),

    methods:{
      tipo(msg){
        alert('Selecionaste '+msg+' !')
      },
      detailItem(){

      },
      pryectsCount(){

      }
    },
     components:{
     DetailsItem
    }
  }
  
</script>


<style >

  .rowCards{
    height: 500px;
  }

  .card-group{
    height: 500px;
  }
  .card{
    height: 500px;
  }

  .card-title{
    color:#ffffff;
  }

  .card-text{
    color:#ffffff;
  }


  .card-img-overlay:hover{
    transition: 1s !important;
    transition-delay: 1s !important;
    background-image: linear-gradient(to top, rgba(46,46,46,0), rgba(46,46,46,1));
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

  .badge-position{
      position: absolute;
      left:0px;
      bottom: 5px;
      padding:5px 10px;
  }

  .overlay{
    
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .2s ease;
  }

  .card:hover .overlay{
    opacity: 1;
  }

  .nopadding {
     padding: 0 !important;
     margin: 0 !important;
  }

  .detailsItem{
    position: absolute;
  }



</style>