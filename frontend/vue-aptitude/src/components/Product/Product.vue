<template>
<div class="container">
  <div class="container-products">
    <div class="product" v-for="(product,index) in products" :key="index">
      <div class="con-img">
        <img class="image" :src="product.src" alt="">
        <div class="overlay"></div>
      </div>
      <div class="content-product">
        <div class="description">
          <div class="service">
            <a href="#">{{product.description}}</a>
          </div>
          <div class="btn">
            <a href="#"><font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>

        
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  name: 'ProductItem',
  

  computed:{
    ...mapGetters(['products'])
  }

}
</script>

<style scoped>

.btn{
  position: absolute;
  bottom: -8px;
  left: 95px;
}

.btn a{
  transition: 0.2s;
  color: #21b6ff;
  padding: 15px;
  background: white;
  border-radius: 100%;
}

.description{
  background-color: white;
  text-align: center;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  bottom:25px;
  left: 80px;
  z-index: 5;
  
}

.description .service a{
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  font-size: 20px;
}

.description .service a:hover{
  color: #21b6ff;
}


.con-img{
  position: relative;
  overflow: hidden ;
}
.container{
  background: #F1F6FB;
}
.container-products{
  padding: 20px 0px 100px 0px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

img{
  display: block;
  margin: auto;
  width: 100%;
}

.product {
  width: 25%;
  margin: auto;
  position: relative;
  /* width: 50%; */
  overflow: hidden;
  padding: 50px;
}

.image {
  display: block;
  height: auto;
}

.overlay {
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.3;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .3s ease;
  transition: .3s ease;
}

.product:hover .overlay {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.product:hover img{
  transition: 0.5s;
  transform: scale(1.2)
}

.product:hover .description{
  bottom: 80px;
  transition: 0.5s;
}

.product:hover .btn a{
  background: #21b6ff;
  color: white;
}


/* .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
} */

</style>