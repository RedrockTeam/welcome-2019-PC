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
        title: '兴业苑',
        content: [
          '兴业苑食堂作为老一派的食堂，与中心食堂一样，不断沉淀自己的重庆味道，色香味俱全的家烧菜肴，总有一款美味属于家的味道。',
          '推荐菜目：青椒炒肉丝，回锅肉，辣子鸡丁',
          '人均消费：9元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/xyy/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/xyy/img3.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/xyy/img2.jpg'),
      ],
    }
  },
}
</script>
