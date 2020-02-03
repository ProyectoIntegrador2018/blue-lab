<template>

<div class="detailItem">
    <div class="featureItem">
    <img src= "../assets/blueppl.png" class="imgFeature" >
    </div>

     <div class="tabsItem">
    
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
             <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Info 1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Info 2</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Info 3</a>
        </li>
        </ul>


        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</div>
 
            </div> 
    </div> <!-- div tabsItem -->

<div class= "extrasItem">
    
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
        <p> German de la Fuente </p>
        </div>

        <div class="phone-div">
        <img src="../assets/phone.svg" class="phone">
        <p> 8123456789 </p>
        </div>

        <div class="mail-div">
        <img src="../assets/mail.svg" class="mail">
        <p> gdelafuente@bluepeople.com </p>
        </div>

        </div>
    </div> <!-- div salesContact -->

    <div class= "tags">
        <a href="#" class="badge badge-pill badge-primary">Tag</a>
        <a href="#" class="badge badge-pill badge-light">Tag</a>
        <a href="#" class="badge badge-pill badge-light">Tag</a>
        <a href="#" class="badge badge-pill badge-light">Tag</a>
        
    </div> <!-- div tags -->
</div> <!-- div extrasItem -->

</div> <!-- div detailItem -->

</template>


<script>


export default {
  name: 'DetailsItem',
  props: {
    msg: String
  }
}
</script>

<style>
.detailItem{
    display:  flex;
   
   padding: 10px;
   margin: 5px;
   flex-direction: row;
   background-color: #060e3b;
   border-radius:5px;
   
}

.tabsItem{
    width: 70%;
}
.imgFeature {
  border-radius: 10px;
  margin-top:40px;
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
  background-color:#060e3b;
   margin: 30px;
}
.tab-content{
    background-color:#060e3b;
    color:white;
    padding-left:30px;
    padding-top: 20px;
    width: 90%;
}
.nav-tabs > li > a{
  border: medium none;
   background-color: #060e3b !important;
   color: white;
}
.nav-tabs > li > a:hover{
  background-color: white !important;
    border: medium none;
    border-radius: 0;
    color:black;
}
a.active.nav-link{
    color: #17a2b8!important;
    font: bolder;
}

.tags{
    display: flex;
    flex-direction: row;
    
    padding: 30px;
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