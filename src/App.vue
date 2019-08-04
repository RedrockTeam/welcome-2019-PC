<template>
  <div id="app">
    <my-header />
    <QRcode />
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/layout/MyHeader.vue'
import QRcode from '@/components/QRcode.vue'

export default {
  components: {
    MyHeader,
    QRcode,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: coolfont;
  src: url(./assets/font/MFLiHei.ttf);
}

#app {
  font-family: 'coolfont';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
