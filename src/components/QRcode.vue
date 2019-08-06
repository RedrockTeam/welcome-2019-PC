<template>
  <div :class="searchBarFixed == true ? 'fixed' : 'qrcode'"  ref="all">
    <div class="qrcode_left">
    </div>
    <div class="qrcode_right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'QRcode',
  data() {
    return {
      searchBarFixed: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const { offsetTop } = this.$refs.all
      console.log(offsetTop)
      scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
  },
}
</script>

<style lang="scss" scoped>
/* #qrcode {
  margin: 0 auto;
  width: 1440px;
  position: absolute;
  top: 200px;
  left: 0px;
  z-index: 2;
  left: 0;
  right: 0;
}*/
.qrcode_left {
  position: absolute;
  top: 100px;
  float: left;
  width: 220px;
  height: 251px;
  background-image: url(../assets/img/QRcode/qrcodeLeft.png);
}
.qrcode_right {
  float: left;
  margin: 0 auto;
  position: relative;
  top: 100px;
  left: 1220px;
  right: 500px;
  width: 220px;
  height: 251px;
  background-image: url(../assets/img/QRcode/qrcodeRight.png);

}
.qrcode {
  position: absolute;
  top: 200px;
  z-index: 2;
  transition: 2s;
}
.fixed {
  position: fixed;
  top: 5px;
  z-index: 4;
}


</style>
