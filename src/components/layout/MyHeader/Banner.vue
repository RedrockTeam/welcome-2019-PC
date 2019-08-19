<template>
  <div id="banner">
    <div class="plane"></div>
    <div class="cars"></div>
    <div class="light" v-show="show"></div>
    <div class="left-drill"></div>
    <div class="right-drill"></div>
    <ul class="time_ul">
      <li class="day" ref="day">{{ d }}
        <div class="deng">
          <div class="deng1"></div>
          <div class="deng2"></div>
          <div class="deng3"></div>
        </div>
      </li>
      <li class="hour" ref="hour">{{ h }}
        <div class="deng">
          <div class="deng1"></div>
          <div class="deng2"></div>
          <div class="deng3"></div>
        </div>
      </li>
      <li class="minute" ref="minute">{{ m }}
        <div class="deng">
          <div class="deng1"></div>
          <div class="deng2"></div>
          <div class="deng3"></div>
        </div>
      </li>
      <li class="seconds" ref="seconds">{{ s }}
        <div class="deng">
          <div class="deng1"></div>
          <div class="deng2"></div>
          <div class="deng3"></div>
        </div>
      </li>
    </ul>
    <div class="lanterns">
      <div class="lantern"></div>
      <div class="lantern"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      show: false,
      d: '1',
      h: '2',
      m: '3',
      s: '4',
    }
  },
  mounted() {
    this.countTime()
    this.showTime()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
    clearTimeout(this.showTimer)
  },
  methods: {
    showTime() {
      this.showTimer = setTimeout(() => {
        this.show = true
      }, 3000)
    },
    countTime() {
      const date = new Date();
      const now = date.getTime();
      const endDate = new Date('2019-9-4 23:23:23');
      const end = endDate.getTime();
      const leftTime = end - now;
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      if (this.d < 10) {
        this.d = `0${this.d}`
      }
      if (this.h < 10) {
        this.h = `0${this.h}`
      }
      if (this.m < 10) {
        this.m = `0${this.m}`
      }
      if (this.s < 10) {
        this.s = `0${this.s}`
      }
      this.timer = setTimeout(this.countTime, 1000);
    },
  },
}
</script>

<style scoped lang="scss">
.cars {
  float: left;
  width: 157px;
  height: 76px;
  position: absolute;
  right: 30px;
  top: 150px;
  background-image: url(../../../assets/img/Banner/cars.png);
  background-size: 100% 100%;
  animation: cars 5s infinite;
}
@keyframes cars {
  0% {
    right: 2vw;
  }
  50% {
    right: 6vw;
  }
  100% {
    right: 2vw;
  }
}
.deng {
  margin: 0 auto;
  width: 7px;
  height: 20px;
  position: absolute;
  bottom: -24px;
  left: 32px;
  .deng1 {
    width: 7px;
    height: 3px;
    background-color: rgb(79, 232, 255);
    margin-top: 4px;
    animation: 4s deng1  infinite;
  }
  .deng2 {
    width: 7px;
    height: 3px;
    background-color: rgb(79, 232, 255);
    margin-top: 3px;
    animation: 4s deng2  infinite;
  }
  .deng3 {
    width: 7px;
    height: 3px;
    background-color: rgb(79, 232, 255);
    margin-top: 3px;
    animation: 4s deng3  infinite;
  }
}
@keyframes deng1 {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  32% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes deng2 {
  0% {
    opacity: 0;
  }
  32% {
    opacity: 0;
  }
  33% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes deng3 {
  0% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.plane {
  float: left;
  width:52px;
  height: 22px;
  background-image: url(../../../assets/img/Banner/plane.png);
  background-size: 100% 100%;
  position: absolute;
  top: 315px;
  left: 80px;
  animation: 4s plane linear infinite;
}
@keyframes plane {
  0% {
    top: 22vw;
  }
  50% {
    top: 19vw;
  }
  100% {
    top: 22vw;
  }
}
#banner {
  position: relative;
  top:63px;
  margin: 0 auto;
  height: 631px;
  background-image: url(../../../assets/img/Banner/banner.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .light {
    position: absolute;
    left: 360px;
    top: 166px;
    width: 747px;
    height: 252px;
    background: url(../../../assets/img/Banner/light.png) no-repeat center/100%;
    animation: showUp 1s, changeColor 2s infinite 1s;
  }
  @keyframes showUp {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes changeColor {
    0% { filter: saturate(50%); }
    50% { filter: saturate(200%); }
    100% { filter: saturate(50%); }
  }
  .left-drill {
    width: 227px;
    height: 127px;
    position: absolute;
    top: 134px;
    left: 142px;
    transform: rotate(25deg);
    transform-origin: 126px 127px;
    background: url(../../../assets/img/Banner/left-drill.png);
  background-size: 100% 100%;
    animation: left-rotate 2s;
  }
  @keyframes left-rotate {
    from { transform: rotate(-20deg); }
    to { transform: rotate(25deg); }
  }
  .right-drill {
    width: 230px;
    height: 101px;
    overflow: hidden;
    position: absolute;
    top: 73px;
    right: 128px;
    transform: rotate(-33deg);
    transform-origin: 80px 100%;
    background: url(../../../assets/img/Banner/right-drill.png);
  background-size: 100% 100%;
    animation: right-rotate 2s;
  }
  @keyframes right-rotate {
    from {
      transform: rotate(20deg);
    }
    to {
      transform: rotate(-33deg);
    }
  }
  .time_ul {
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
    top: 460px;
    font-size: 36px;
    color: white;
    font-family: 'coolfont';
    li {
      width: 70px;
      height: 45px;
      text-align: center;
    }
    .day {
      position: absolute;
      left: 461px;
    }
    .hour {
      position: absolute;
      left: 585px;
    }
    .minute {
      position: absolute;
      right: 566px;
    }
    .seconds {
      position: absolute;
      right: 442px;
    }
  }
  .lanterns {
    position: absolute;
    top: 573px;
    left: 50%;
    transform: translate(-46%, 0);
    width: 341px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    @keyframes lantern {
      from { filter: saturate(300%) blur(8px); }
      50% { filter: saturate(100%) blur(2px); }
    }
    .lantern {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      filter: saturate(300%) blur(8px);
      background: url(../../../assets/img/Banner/lantern.png) no-repeat center/100% 100%, #73dcff;
      animation: lantern 2s infinite;
    }
  }
}
</style>
