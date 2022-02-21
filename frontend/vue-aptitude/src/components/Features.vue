<template>
<div class="container-features">
  <div class="features-content">
    <div class="intro-features">
      <p>Our company was founded in 1975</p>
    </div>
    <div class="feature" v-for="(icon,index) in listIcons" :key="index">
      <img v-bind:src="icon.src" alt="">
      <span>{{icon.content}}</span>
    </div>
  </div>
</div>

</template>

<script>


export default{
  name: 'FeaturesItem',
  data(){
    return {
      listIcons:[
        {src:'https://demo.themexbd.com/html/wella/assets/images/g1.png', content:'Best For Health & Hydration'},
        {src:'https://demo.themexbd.com/html/wella/assets/images/g4.png', content:'Healthy Composition'},
        {src:'https://demo.themexbd.com/html/wella/assets/images/g2.png', content:'100% Maximum Purity'},
        {src:'https://demo.themexbd.com/html/wella/assets/images/g3.png', content:'24/7 Hours Supports'},        
      ]
    } 
  }
}
</script>

<style scoped>

.container-features{
  color: #002c8f;
  padding: 50px;
  background: #F1F6FB;
}
.features-content{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.feature{
  margin: 30px;
}

.intro-features{
  margin: 20px;
  font-size: 50px;
}

.intro-features p{
  font-weight: 600;
  margin: 5px;
}

span{
  display: block;
  margin: 10px;
  font-weight: 600;
}

img{
  display: block;
}
</style>