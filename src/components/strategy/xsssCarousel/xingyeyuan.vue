<template>
  <Carousel class="carousel" :canteen="canteen" :img="img" />
</template>

<script>
/* eslint-disable global-require */
import Carousel from '@/components/base/Carousel.vue'

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      canteen: {
        title: '兴业苑（17-23栋）',
        content: [
          '屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过。内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengsushe/xy1.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/xy2.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/xy3.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/xy4.jpg'),
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
.carousel {
  margin-top: 20px;
}
</style>
