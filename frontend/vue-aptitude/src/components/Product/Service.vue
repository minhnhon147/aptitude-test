<template>
<div class="service-container">
  <hr>
  <div class="title">
    <div class="title-name">
      <span>Our product</span>
    </div>
    <div class="title-content">
      <p id="content-top">We have different items</p>
      <!-- <p id="content-bottom">Maintenance Services</p> -->
    </div>
  </div>
  <ProductItem></ProductItem>
  <div class="btn-view-more">
    <div class="btn">
    <router-link to="/products" @click="getProduct">View More</router-link>
    </div>
  </div>
</div>
</template>

<script>
import ProductItem from "./Product.vue"
import {mapMutations} from "vuex"
export default{
  name: 'ServiceItem',
  components: { 
    ProductItem
    },

  methods:{
    ...mapMutations(['getProduct','addProduct'])
  }

}
</script>

<style scoped>

.btn-view-more{
  background: #F1F6FB;
  padding-bottom: 40px;
  margin: auto;
  
}
.btn-view-more a{
  font-weight: 600;
  padding: 15px;
  color: white;
  background-color:#21b6ff;
  text-decoration: none;
  transition: 0.5s;
  
  display: block;
  width: 100px;  
  margin: auto;
  text-align: center;

}

.btn-view-more a:hover{
  background-color:#002c8f ;
}
  hr{
    margin: 0px;
    border: 2px solid white;
  }

  .title{
    padding-top: 100px;
    text-align: center;
    background: #F1F6FB;
  }

  .title-name span{
    font-size: 17px;
    font-weight: 600;
    color: #24B5FC;
  }

  .title-name{
    position: relative;
  }

  .title-name span::before {
    position: absolute;
    content: "";
    top: 10px;
    left: auto;
    right: 55%;
    width: 4%;
    height: 2px;
    background: #24B5FC;
  }

  .title-name span::after {
    position: absolute;
    content: "";
    top: 10px;
    left: auto;
    right: 41%;
    width: 4%;
    height: 2px;
    background: #24B5FC;
  }

  #content-top{
    margin-bottom: 0px;
  }



  .title-content p{
    color: #002c8f;
    font-weight: 600;
    font-size: 40px;
  }
</style>