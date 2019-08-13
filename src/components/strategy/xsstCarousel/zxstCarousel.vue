<template>
  <Carousel :canteen="canteen" :img="img" />
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
        title: '中心食堂',
        content: [
          '与雨红莲广场毗连，又与风华操场隔道相望的它，由于与二教距离甚近，也常常是同学们打包就餐的不二选择。它以低廉的价格和繁多的种类，在同学们的心中占有绝对地位。',
          '推荐菜目：早餐时段售卖的麻团，糍粑和荤素包子，糖醋里脊',
          '人均消费：8元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/zxst/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/zxst/img3.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/zxst/img2.jpg'),
      ],
    }
  },
}
</script>
