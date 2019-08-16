<template>
  <div id="app">
    <my-header />
      <transition
        name="slide-fade"
        mode="out-in"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
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
  //   created() {
  //     console.log(`
  //    ▄████████    ▄████████ ████████▄     ▄████████  ▄██████▄   ▄████████    ▄█   ▄█▄
  //   ███    ███   ███    ███ ███   ▀███   ███    ███ ███    ███ ███    ███   ███ ▄███▀
  //   ███    ███   ███    █▀  ███    ███   ███    ███ ███    ███ ███    █▀    ███▐██▀
  //  ▄███▄▄▄▄██▀  ▄███▄▄▄     ███    ███  ▄███▄▄▄▄██▀ ███    ███ ███         ▄█████▀
  // ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███    ███ ▀▀███▀▀▀▀▀   ███    ███ ███        ▀▀█████▄
  // ▀███████████   ███    █▄  ███    ███ ▀███████████ ███    ███ ███    █▄    ███▐██▄
  //   ███    ███   ███    ███ ███   ▄███   ███    ███ ███    ███ ███    ███   ███ ▀███▄
  //   ███    ███   ██████████ ████████▀    ███    ███  ▀██████▀  ████████▀    ███   ▀█▀
  //   ███    ███                           ███    ███                         ▀

//   红岩网校 2019 新生专题网 PC 端项目组: 何庚坤、陈先勤
// `)
//   },
}
</script>

<style lang="scss">
@import '@/assets/style/animation.scss';

@font-face {
  font-family: coolfont;
  src: url(./assets/font/MFLiHei.ttf);
}

body {
  background: #b0ceff;
}

#app {
  width: 100vw;
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
