<template>
  <transition
    enter-active-class="animated bounceInUp"
    leave-active-class="animated bounceOutUp faster"
  >
    <div class="go-top"
      @click="goTop"
      v-show="show"
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
      show: false,
      showHeight: 300, // 显示的高度,
    }
  },
  methods: {
    goTop() {
      // 兼容了部分浏览器
      if (!document.body.scrollTop) {
        const length = document.documentElement.scrollTop / this.speed
        this.timer = setInterval(() => {
          if (!document.documentElement.scrollTop <= 0) {
            document.documentElement.scrollTop -= length
          } else {
            clearInterval(this.timer)
          }
        })
      } else {
        const length = document.body.scrollTop / this.speed
        this.timer = setInterval(() => {
          if (!document.body.scrollTop <= 0) {
            document.body.scrollTop -= length
          } else {
            clearInterval(this.timer)
          }
        })
      }
    },
    isShow() {
      if (!document.body.scrollTop) {
        this.show = document.documentElement.scrollTop > this.showHeight
      } else {
        this.show = document.body.scrollTop > this.showHeight
      }
    },
  },
  created() {
    document.addEventListener('scroll', this.isShow)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.isShow)
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
  bottom: 230px;
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
</style>
