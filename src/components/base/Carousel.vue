<template>
  <div class="all">
    <lunbo :imglist="img.map(img => ({ imgsrc: img }))" class="lunbo" />
    <div class="info">
        <div>{{canteen.title}}：</div>
        <p>
          {{canteen.content[0]}}<br />
          {{canteen.content[1]}}<br />
          {{canteen.content[2]}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import lunbo from '@/components/base/lunbo.vue'

export default {
  name: 'zxstCarousel',
  components: {
    lunbo,
  },
  props: {
    img: Array,
    canteen: Object,
  },
  methods: {
    left() {
      this.autoflag = false
      if (this.isDisabled || this.auto) {
        return false
      }

      if (this.mark == 0) {
        this.mark = this.img.length - 1
      } else {
        this.mark -= 1
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
        this.autoflag = true
      }, 1000)
    },
    right() {
      this.autoflag = false
      if (this.isDisabled) {
        return false
      }

      if (this.mark == this.img.length - 1) {
        this.mark = 0
      } else {
        this.mark += 1
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    },
    change(x) {
      this.autoflag = false
      if (this.isDisabled) {
        return false
      }
      this.mark = x
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    },
    autoPlay() {
      if (this.autoflag == false) {
        return false
      }
      this.mark += 1;
      if (this.mark == this.img.length) {
        this.mark = 0
      }
      this.auto = true
      setTimeout(() => {
        this.auto = false
      }, 1000)
    },
  },
  data() {
    return {
      mark: 1,
      isDisabled: false,
      auto: false,
      autoflag: true,
    }
  },
  created() {
    this.timer = setInterval(this.autoPlay, 4000)
  },
}
</script>

<style lang="scss" scoped>
.all {
    position: relative;
}
.info {
  width: 715px;
    position: absolute;
    left: 0;
    right: 0;
    top: 338px;
    text-align: left;
    margin: 0 auto;
    div {
        font-size: 18px;
        color: rgb(35, 72, 179);
        margin-bottom: 20px;
    }
    p {
      height: auto;
      padding-bottom: 10px;
      position: relative;
      font-size: 14px;
      font-family: '微软雅黑';
      color: #124ce3;
    }
}
</style>
