<template>
  <div class="header-bottom">
    <div class="header-bottom-container">
      <div class="logo">
        <p>
          <img src="../../assets/logo1.png" alt="">
        </p>
      </div>

      <div class="nav-bar">
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
        <ul>
          <li class="has-icon"><a href="">Home</a></li>
          <li class="has-icon"><a href="">Company</a></li>
          <li class="has-icon"><a href="">Portfolio</a></li>
          <li class="has-icon"><a href="">Services</a></li>
          <li class="has-icon"><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        <div class="btn-get">
          <a href="#">Get In Touch</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'HeaderBottom',


}
</script>

<style scoped>

.header-bottom-container{
  display: flex;
  justify-content: space-between;
}

.logo{
  margin: 12px 0px 12px 3rem;
}

a{
  transition: 0.7s;
  font-weight: 700;
  font-size: 18px;
  color: black;
  text-decoration: none;
}

.has-icon > a::after{
  opacity: 0.3;
  margin-left: 5px;
  content: "\f107";
  font-family: 'Font Awesome\ 5 Free';
}
a:hover{
  color: #21b6ff;
}
li{
  margin: 15px;
  display: inline-block;
  list-style: none;

}

.nav-bar{
  display: flex;
  margin: auto;
}

ul{
  margin-right: 30px;
}
.btn-get{
  margin: auto;
}

.btn-get > a{
  background-color: #21b6ff;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
}

.btn-get > a:hover{
  background-color:#002c8f;
}

</style>