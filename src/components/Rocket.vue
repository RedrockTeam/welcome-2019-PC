<template>
  <transition
    enter-active-class="animated bounceInUp"
    leave-active-class="animated bounceOutUp faster"
  >
    <div class="go-top"
      @click="goTop"
      v-show="isShow"
      :class="{ adjust: needAdjust }"
    >
      <div class="rocket"></div>
      <div class="fire"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      speed: 50, // 数值越小越快
      isShow: false,
      showHeight: 300, // 显示的高度,
      needAdjust: false,
      platformHeight: 4265,
    }
  },
  methods: {
    goTop() {
      const body = document.documentElement.scrollTop ? document.documentElement : document.body
      const length = body.scrollTop / this.speed
      this.timer = setInterval(() => {
        if (!body.scrollTop <= 0) {
          body.scrollTop -= length
        } else {
          clearInterval(this.timer)
        }
      })
    },
    showUp() {
      this.isShow = (document.documentElement.scrollTop || document.body.scrollTop)
        > this.showHeight
    },
    adjust() {
      this.needAdjust = (document.documentElement.scrollTop || document.body.scrollTop)
        > this.platformHeight
    },
  },
  mounted() {
    document.addEventListener('scroll', this.showUp)
    document.addEventListener('scroll', this.adjust)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.showUp)
    document.removeEventListener('scroll', this.adjust)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/animation.scss';
@keyframes fire {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
.go-top {
  width: 150px;
  height: 220px;
  cursor: pointer;
  position: fixed;
  bottom: 60px;
  margin-left: 1290px;
  z-index: 8;
  &:hover {
    .fire {
      animation: fire 0.3s infinite;
    }
  }
}
.rocket {
  width: 103px;
  height: 166px;
  background: url("../assets/img/Rocket/rocket.png");
  margin-bottom: -8px;
}
.fire {
  width: 103px;
  height: 97px;
  background: url("../assets/img/Rocket/fire.png");
}
.adjust {
  position: absolute;
  bottom: -50px;
}
</style>
