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
        title: '红高粱',
        content: [
          '红高粱食堂伫立于兴业苑食堂上方，红高粱食堂总具有自己的风格，不断推陈出新，在这里你可以品尝到新的变化！',
          '推荐菜目：冒菜，花溪米线，土耳其烤肉饭',
          '人均消费：12元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img2.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img3.jpg'),
      ],
    }
  },
}
</script>
