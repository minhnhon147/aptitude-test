<template>
<div class="background-slide">
  <div class="background-content">
    <h1>WELCOME TO <span style="color:#21b6ff;">WATER</span></h1>
    <p>Highest Quality Water Services 24 Hours.</p>

    <div class="multi-btn">
      <a id="btn-service" href="#">OUR SERVICE
        <font-awesome-icon icon="arrow-right" />
      </a>

      <a id="btn-play" href="#">
        <font-awesome-icon icon="play" />
      </a>
      
    </div>
  </div>
</div>
</template>

<script>

export default{
  name: 'BackgroundItem',

}
</script>

<style scoped>

.background-slide{
  display: flex;
  background-image: url(../assets/slider1.jpg) ;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center center;
  min-height: 600px;
  width: 100%;

}

.background-content{
  width: 70%;
  margin: auto;
  color: white;
}

h1{
  font-size: 24px;
}
.background-content > p{
  margin: 30px 0 30px 0;
  width: 450px;
  font-size: 70px;
  font-weight: 600;
}

.multi-btn > a#btn-service:hover{
  background-color:#002c8f;
  
}


.multi-btn > a{
  margin-right: 20px;
  font-weight: 500;
  transition: 0.5s;
  font-size: 17px;
  padding: 20px 30px 20px 30px;
  background-color:#21b6ff ;
  color: white;
  text-decoration: none;
}

a#btn-play{
  border-radius: 100%;
}
</style>