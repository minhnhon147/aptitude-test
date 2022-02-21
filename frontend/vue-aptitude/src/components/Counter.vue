<template>
<div class="counter-area">
  <div class="counter-container">
    <div class="users">
      <span class="icon">
        <font-awesome-icon :icon="['far','user']" />
      </span>
      <div class="content">
        <p id="number">6958+</p>
        <p id="description">Trusted Client</p>
      </div>
      
    </div>
    <div class="projects">
      <span class="icon">
        <font-awesome-icon icon="list-check" />
      </span>
      <div class="content">
        <p id="number">6958+</p>
        <p id="description">Project Completed</p>
      </div>
    </div>
    <div class="works">
      <span class="icon">
        <font-awesome-icon icon="truck" />
      </span>
      <div class="content">
        <p id="number">9953+</p>
        <p id="description">Total Works</p>
      </div>
    </div>
    <div class="members">
      <span class="icon">
        <font-awesome-icon icon="users" />
      </span>
      <div class="content">
        <p id="number">199+</p>
        <p id="description">Team Members</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default{
  name: 'CounterArea',
}


</script>

<style scoped>
  .counter-area{
    padding: 50px;
  }

  .counter-container{
    display: flex;
    justify-content: space-around;
  }

  .counter-container > div{
    display: flex;
  }
  .counter-container span.icon{
    color:#002c8f;
    font-size: 50px;
  }

  #number{
    font-size: 35px;
    color: #21b6ff;
    margin: 0px;
  }

  #description{
    margin: 0px;
  }

  .content{
    font-weight: 600;
    color: #002c8f;
    margin-left: 20px;
  }

  .projects, .members{
    padding-top: 100px;
  }

</style>