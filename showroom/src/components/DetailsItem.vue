<template>

<div class="detailItem">
<h1 class="titleItem">{{details_item.title}}</h1>

<div class="container">
  <div class="row">
    <div class="col-4" id="featureItem">
        
      <img :src="details_item.img_feature" class="imgFeature" >
    </div>
    <div class="col-4" id="tabsItem">
        
       <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
             <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{{details_item.title_descr_1}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">{{details_item.title_descr_1}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">{{details_item.title_descr_1}}</a>
        </li>
        </ul>
         <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                {{details_item.descr_1}}
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
               {{details_item.descr_1}}
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">{{details_item.descr_1}}</div>
 
            </div> 

    </div>
    <div class="col-4" id="extrasItem">
    
     <div class="certif">
        <img src="../assets/aws-certif.png" alt="aws" class="aws-img">
        <img src="../assets/iso-certif.png" alt="iso" class="iso-img">
        <img src="../assets/microsoft-certif.png" alt="certif" class="microsoft-img">
        <img src="../assets/istob-certf.png" alt="istob" class="istob-img">

    </div> 

    <div class="salesContact">
        <div class="contactImg">
            <img src ="../assets/user-def.png" class="user-img">
        </div>
        <div class="contactInfo">
        <div class="user-div">
        <img src="../assets/user.svg" class="user">
        <p> {{contact_name}} </p>
        </div>

        <div class="phone-div">
        <img src="../assets/phone.svg" class="phone">
        <p> {{contact_phone}} </p>
        </div>

        <div class="mail-div">
        <img src="../assets/mail.svg" class="mail">
        <p> {{contact_email}} </p>
        </div>

        </div>
    </div> 

    <div class= "tags">
        <ul v-for="(tag,j) in details_item.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
       
        
    </div> 
    </div>
  </div>
</div>

</div>

</template>


<script>

 import {mapState} from 'vuex';
export default {
  name: 'DetailsItem',
 computed: mapState(['details_item','contact_name','contact_phone','contact_email']),
}
</script>

<style>
.detailItem{
   
   padding: 10px;
   margin: 0px;
   flex-direction: row;
   background: radial-gradient( rgb(20, 72, 114), rgba(0,0,0,.9));
   border-radius:5px;
  
   
}

.badgedetails{
    margin: 5px !important;
    font-size: 100% !important;
  }

.tabsItem{
    width: 70%;
}
.imgFeature {
  border-radius: 10px;
  margin-top:20px;
  width: 350px;
}

.titleItem{
    margin-top: 20px;
    text-align: center;
}

.certif{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
}

.aws-img{
    width: 85px;
    height: 40px;
    margin: 15px;
    margin-top: 5px;
}
.microsoft-img{
    width: 120px;
    height: 30px;
    margin: 15px;
    margin-top: 5px;
}
.istob-img{
    width: 70px;
    height: 40px;
    margin: 15px;
    margin-top: 5px;
}
.iso-img{
    width: 120px;
    height: 40px;
    margin: 15px;
    margin-top: 5px;
}

.nav-tabs{
  
   margin: 30px;
}
.tab-content{
   
    color:white;
    padding-left:30px;
    padding-top: 20px;
    width: 90%;
}
.nav-tabs > li > a{
  border: medium ;
  
   color: white;
   border: 1px;
}
.nav-tabs > li > a:hover{
  background-color: rgba(255, 255, 255, 0.575) !important;
    border: medium ;
    border-radius: 1;
    color:black;
}
a.active.nav-link{
    color: #237986!important;
    font: bolder;
}

.tags{
    display: flex;
    flex-direction: row;
    padding: 30px;
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


.extrasItem{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top:30px;
    margin-bottom: 30px;
    align-items: baseline;
}

span{
    margin: 5px;
    
}

.user-img{
    border-radius: 50%;
    width:90px;
}

.salesContact{
    display: flex;
    flex-direction: row;
}

.contactInfo{
display: flex;
flex-direction: column;
margin-top: 10px;
margin-left: 20px;
color: white;
align-items: baseline;
flex-wrap: wrap;

}

.user-div, .phone-div, .mail-div{
    display: flex;
    flex-direction: row;
}
p{
    margin: 20px;
}
.phone, .user, .mail{
    height: 20px;
    filter: brightness(0) invert(1);
  
}
</style>