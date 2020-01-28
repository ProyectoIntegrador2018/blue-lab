<template>


<div class="container-fluid">
  <div class="row">
    <div class="card-group ">
      <div class="card">
        <img src="@/assets/Proy1.png" class="card-img h-100"  alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 1</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Financiero</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/Proy2.png" class="card-img h-100" alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 2</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Comercial</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/Proy3.png" class="card-img h-100" alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 3</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Educativo</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="row">
    <div class="card-group">

       <div class="card">
        <img src="@/assets/Proy4.png" class="card-img h-100" alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 4</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Administrativo</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/Proy3.png" class="card-img h-100" alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 5</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Educativo</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <img src="@/assets/Proy4.png" class="card-img h-100" alt="...">
        <div class="card-body">
          <div class="card-img-overlay">
            <div class="overlay">
              <h1 class="card-title">Proyecto 6</h1>
              <p class="card-text">Subtitulo de Proyecto</p>
            </div>
            <div class="badge-position">
              <a href="#" class="badge badge-pill badge-primary">Financiero</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
              <a href="#" class="badge badge-pill badge-light">Tag</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


</div>




<!--  Seccion para cargar datos

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
  export default {
    name: "CardItem",
    data: () => ({
      cards: [
        { title: 'Proyecto 1', src: '@/assets/Proy1.png', flex: 3, chip:"Financiero"},
        { title: 'Proyecto 2', src: '@/assets/Proy2.png', flex: 3, chip:"Comercial"},
        { title: 'Proyecto 3', src: '@/assets/Proy3.png', flex: 3, chip:"Educativo"},
        { title: 'Proyecto 4', src: '@/assets/Proy4.png', flex: 3, chip:"Administrativo"},
        { title: 'Proyecto 3', src: '@/assets/Proy3.png', flex: 3, chip:"Administrativo"},
        { title: 'Proyecto 4', src: '@/assets/Proy4.png', flex: 3, chip:"Educativo"},
        { title: 'Proyecto 1', src: '@/assets/Proy1.png', flex: 3, chip:"Comercial"},
        { title: 'Proyecto 2', src: '@/assets/Proy2.png', flex: 3, chip:"Financiero"}

      ],
    }),

    methods:{
      tipo(msg){
        alert('Selecionaste '+msg+' !')
      },
    }
  }
  
</script>


<style >

.row{
  height: 300px;
}

.card-group{
  height: 300px;
}
.card{
  height: 300px;
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

</style>