<template>
  <div id="app">
    <my-header />
    <router-link to="/strategy"></router-link>
    <router-view/>
    <Myfooter></Myfooter>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/MyHeader.vue'
import Myfooter from './components/footer/footer'

export default {
  components: {
    MyHeader,
    Myfooter,
  },
}
</script>

<style lang="css">
@font-face {
  font-family: coolfont;
  src: url(./assets/font/MFLiHei.ttf);
}

#app {
  font-family: 'coolfont';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(176, 206, 255);
  margin: 0 auto;

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
