<template>
<div class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <p>Customized Solution For Every Industry Needs!</p>
    </div>
    <div class="btn-subscribe">
      <a href="#"> Subscribe Now <font-awesome-icon icon="arrow-right" /></a>
    </div>
  </div>
</div>
</template>

<script>

export default{
  name: 'FooterItem',

}
</script>

<style scoped>
  .footer-container{
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: 600;
    width: 70%;
    margin: auto;
    
  }

  .footer-container .footer-content{
    font-size: 30px;
  }

  .footer-container .footer-content p{
    width: 70%;
  }

  a{
    background-color: #21b6ff;
    text-decoration: none;
    color: white;
    padding: 15px;
    border-radius: 5px;
    transition: 0.5s;
  }

  a:hover{
        background-color: #002c8f;

  }

  .footer{
    background-color: #002c8f;
  }

  .footer-container .btn-subscribe{
    margin: auto;
  }
</style>