<template>
  <div id="app">
    <my-header />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/layout/MyHeader/MyHeader.vue'
import MyFooter from '@/components/layout/MyFooter.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: coolfont;
  src: url(./assets/font/MFLiHei.ttf);
}

body {
  background: #b0ceff;
}

#app {
  width: 1440px;
  margin: 0 auto;
  font-family: 'coolfont';
  font-size: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #b0ceff;
  a {
    text-decoration: none;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
</style>
