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
const SHAKEHEIGHT = 0.0196

export default {
  data() {
    return {
      animated: false,
    }
  },
  mounted() {
    this.body = document.documentElement.scrollTop ? document.documentElement : document.body
    this.shakeHeight = SHAKEHEIGHT * this.body.scrollHeight
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const { code } = this.$refs
      if (code.getBoundingClientRect().top <= this.shakeHeight && !this.animated) {
        this.animated = true
      } else if (code.getBoundingClientRect().top > this.shakeHeight && this.animated) {
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
  background-size: 100% 100%;
}
.qrcode_right {
  position: absolute;
  left: 1220px;
  top: 0;
  width: 220px;
  height: 251px;
  background-image: url(../../assets/img/QRcode/qrcodeRight.png);
  background-size: 100% 100%;
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
    transform: translate(0, -2vw);
  }
  30% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, -0.7vw);
  }
  100% {
    transform: translate(0);
  }
}
</style>
