<template>
  <div class="header-top">
    <div class="container">
      <div class="left-content">
        <p>
        <span>
          <font-awesome-icon icon="home" />
                 Water Floor New World
        </span>
        <span>
          <font-awesome-icon icon="phone-alt" />
                 +998556778345
        </span>
        <span>
          <font-awesome-icon icon="envelope" />
                 demo@example.com
        </span>
        </p>
      </div>

      <div class="right-content">
          <p>
            <a href="#"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab','twitter']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab','instagram']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab','google-plus-g']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab','dribbble']" /></a>
          </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HeaderTop'
}
</script>

<style scoped>

.header-top{
  margin: 0;
  background: #002c8f;
}

.container{
  display: flex;
  justify-content: space-between;
}
.left-content{
  margin-left: 3rem;
}

a{
  text-decoration: none;
  color: #fff;
  margin: 5px;
}
a:hover{
  color: black;
}

.right-content{
  margin-right: 2rem;
}
p{
  margin: 1rem;
}
span{
  margin-right: 15px;
  color: #fff;
}
</style>