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
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
      const { offsetTop } = this.$refs.all
      if (scrollTop > offsetTop) {
        console.log(offsetTop)
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.qrcode_left {
  width: 220px;
  height: 251px;
  background-image: url(../assets/img/QRcode/qrcodeLeft.png);
}
.qrcode_right {
  position: absolute;
  left: 1220px;
  top: 0;
  width: 220px;
  height: 251px;
  background-image: url(../assets/img/QRcode/qrcodeRight.png);
}
.qrcode {
  position: absolute;
  top: -400px;
  z-index: 2;
  transition: 1s;
}
.fixed {
  position: fixed;
  top: 5px;
  z-index: 2;
}
</style>
