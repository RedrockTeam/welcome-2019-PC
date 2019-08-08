<template>
  <div
    :class="{ qrcode: true, animate: animated }"
    ref="code"
  >
    <div class="qrcode_left">
    </div>
    <div class="qrcode_right">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animated: false,
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
      const { code } = this.$refs
      if (code.getBoundingClientRect().top === 100 && !this.animated) {
        this.animated = true
      } else if (code.getBoundingClientRect().top > 100 && this.animated) {
        this.animated = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.qrcode_left {
  width: 220px;
  height: 251px;
  background-image: url(../../assets/img/QRcode/qrcodeLeft.png);
}
.qrcode_right {
  position: absolute;
  left: 1220px;
  top: 0;
  width: 220px;
  height: 251px;
  background-image: url(../../assets/img/QRcode/qrcodeRight.png);
}
.qrcode {
  position: sticky;
  top: 100px;
  z-index: 2;
  transition: 1s;
  float: left;
  margin-top: -400px;
  transition: 1s;
}
.animate {
  animation: shake .8s;
}
@keyframes shake {
  0% {
    transform: translate(0);
  }
  10% {
    transform: translate(0, -30px);
  }
  30% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, -10px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
