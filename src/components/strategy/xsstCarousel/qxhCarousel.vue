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
        title: '千喜鹤',
        content: [
          '千喜鹤怕是重邮最具重庆味道的食堂了，不过这品味的不是麻辣鲜香的那一味，而是重庆高低井然错落有致的建筑风格，除去对着明理苑的正门，你同时还可以从延生内部和楼下的楼梯直上。倘若说在食堂中挑一个最喜欢的，那千喜鹤一定是高居榜首的那一个，相比于食堂，千喜鹤更像是一个美食广场，从西式快餐到中式早点，从日常正餐到饭后甜点，可谓是应有尽有。',
          '推荐菜目：火锅米线，豆浆记忆，盐酥鸡',
          '人均消费：18元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/img/qxh1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/qxh3.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/qxh2.jpg'),
      ],
    }
  },
}
</script>
