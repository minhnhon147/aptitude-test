<template>
<div class="header">
  <HeaderTop></HeaderTop>
  <HeaderBottom></HeaderBottom>
</div>
</template>

<script>
import HeaderTop from './HeaderTop.vue';
import HeaderBottom from './HeaderBottom.vue'

export default{
  name: 'HeaderItem',
  components: { 
    HeaderTop,
    HeaderBottom
    }

}
</script>

<style scoped>

</style>