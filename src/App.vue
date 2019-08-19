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
  //      ▄████████    ▄████████ ████████▄     ▄████████  ▄██████▄   ▄████████    ▄█   ▄█▄
  //     ███    ███   ███    ███ ███   ▀███   ███    ███ ███    ███ ███    ███   ███ ▄███▀
  //     ███    ███   ███    █▀  ███    ███   ███    ███ ███    ███ ███    █▀    ███▐██▀
  //    ▄███▄▄▄▄██▀  ▄███▄▄▄     ███    ███  ▄███▄▄▄▄██▀ ███    ███ ███         ▄█████▀
  //   ▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███    ███ ▀▀███▀▀▀▀▀   ███    ███ ███        ▀▀█████▄
  //   ▀███████████   ███    █▄  ███    ███ ▀███████████ ███    ███ ███    █▄    ███▐██▄
  //     ███    ███   ███    ███ ███   ▄███   ███    ███ ███    ███ ███    ███   ███ ▀███▄
  //     ███    ███   ██████████ ████████▀    ███    ███  ▀██████▀  ████████▀    ███   ▀█▀
  //     ███    ███                           ███    ███                         ▀

//   红岩网校 2019 迎新网 PC 端项目组：何庚坤、陈先勤
// `)
//   },
}
</script>

<style lang="scss">
@import '@/assets/style/animation.scss';

@font-face {
  font-family: 'coolfont';
  font-display: swap;
  src: url('./assets/font/MFLiHei.eot'); /* IE9 */
  src: url('./assets/font/MFLiHei.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/font/MFLiHei.woff2') format('woff2'),
  url('./assets/font/MFLiHei.woff') format('woff'), /* chrome、firefox */
  url('./assets/font/MFLiHei.ttf') format('truetype'),
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('./assets/font/MFLiHei.svg#webfont') format('svg'); /* iOS 4.1- */
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html::-webkit-scrollbar {
  width: 0px;
}

body {
  width: 100vw;
  background: #b0ceff;
  overflow-x: hidden;
}

#app {
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
