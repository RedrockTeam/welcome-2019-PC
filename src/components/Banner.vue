<template>
  <div id="banner">
    <img src="../assets/img/Banner/light.png" class="light">
    <ul class="time_ul">
      <li class="day" ref="day">{{ d }}</li>
      <li class="hour" ref="hour">{{ h }}</li>
      <li class="minute" ref="minute">{{ m }}</li>
      <li class="seconds" ref="seconds">{{ s }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      d: '1',
      h: '2',
      m: '3',
      s: '4',
    }
  },
  mounted() {
    this.countTime()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    countTime() {
      const date = new Date();
      const now = date.getTime();
      const endDate = new Date('2019-9-10 23:23:23');
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
#banner {
  position: relative;
  top:63px;
  margin: 0 auto;
  height: 631px;
  width: 1440px;
  background-image: url(../assets/img/Banner/banner.png);
  background-repeat: no-repeat;
  background-size: 1440px;
  .light {
    position: absolute;
    left: 402px;
    top: 164px;
    animation: changeColor 3s infinite;
  }
  @keyframes changeColor {
    0% { filter: saturate(50%) }
    50% { filter: saturate(200%) }
    100% { filter: saturate(50%) }
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
}
</style>
