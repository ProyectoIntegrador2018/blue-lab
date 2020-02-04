<template>


<div class="container-fluid">

  <div class="row" >
    <div class="card-group">

      <div class="col-4 nopadding" v-for="(itemObj,i) in items" :key="`${i}-${itemObj.title}`">
        <a class="card" data-toggle="modal" data-target=".bd-example-modal-lg"  @click="displayDetails(itemObj._id)">
          
          <img :src="itemObj.img_principal" class="card-img h-100" alt="...">
          
            <div class="card-img-overlay">
              
                <h1 class="card-title">{{itemObj.title}}</h1>
                 <div class="overlay">
                <p class="card-text">{{itemObj.title_descr_1}}</p>
              </div>
              <div class="badge-position">
                
                  <ul v-for="(tag,j) in itemObj.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
                
             <!--<a href="#" class="badge badge-pill badge-light">Tag</a>
                <a href="#" class="badge badge-pill badge-light">Tag</a>
                <a href="#" class="badge badge-pill badge-light">Tag</a> -->
                 
              </div>
           
            </div>
        </a>


  <!-- Moadal show details -->


<div class="modal fade bd-example-modal-lg" tabindex="-1 " role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <DetailsItem :itemObj="itemObj" ></DetailsItem>
    </div>
  </div>
</div>



      </div>
    </div>
  </div>

 




</div>


   

</template>


<script>
  import DetailsItem from '@/components/DetailsItem.vue'
  import {mapState} from 'vuex';

  export default {
    name: "CardItem",
    data: () => ({
      cards: [

        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"},
        { title: 'Proyecto 1', subtitle:'Subtitulo de proyecto' ,src: require('@/assets/Proy1.png'), tags:"Financiero"} 

      ],
    }),
     components:{
     DetailsItem
    },
     computed: mapState(['items']),
      created(){
    this.$store.dispatch('loadItems')
  },
  methods:{
    displayDetails(itemId){
      this.$store.dispatch('loadDetailsItem',itemId)
    }
  }
  }
  
</script>


<style >

  .row{
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

  ul, a{
    display:inline;
   
  }



</style>