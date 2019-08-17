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
        title: '延生',
        content: [
          '被宁静苑和知行苑两相环绕，算的是颇为优越的地理位置。没有富丽堂皇的过分修饰，多的是一览无余的简单明了。亲切，日常，这两个词来形容延生食堂最合适不过了，亲切的是带有两三分家长里短的味道，日常的是朝朝暮暮交错间穿梭的身影。',
          '推荐菜目：冒菜，鲜榨豆浆，羊肉粉',
          '人均消费：10元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/img/ys1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/ys2.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/ys3.jpg'),
      ],
    }
  },
}
</script>
