<template>
  <div id="app">
    <HeaderItem></HeaderItem>
    <BackgroundItem></BackgroundItem>
    <FeaturesItem></FeaturesItem>
    <ServiceItem></ServiceItem>
    <!-- <router-view/> -->
    <CounterArea></CounterArea>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import BackgroundItem from './components/Background.vue';
import HeaderItem from './components/Header/Header.vue';
import FeaturesItem from './components/Features.vue';
import ServiceItem from './components/Product/Service.vue'
import CounterArea from './components/Counter.vue';
import FooterItem from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderItem,
    BackgroundItem,
    FeaturesItem,
    ServiceItem,
    CounterArea,
    FooterItem
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
}

</style>
