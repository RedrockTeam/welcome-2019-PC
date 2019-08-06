<template>
  <div id="app">
    <my-header />
    <QRcode />
    <Track />
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/layout/MyHeader.vue'
import QRcode from '@/components/QRcode.vue'
import MyFooter from '@/components/layout/MyFooter.vue'
import Track from '@/components/layout/Track.vue'

export default {
  components: {
    MyHeader,
    QRcode,
    MyFooter,
    Track,
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
  background: #b0ceff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
</style>
