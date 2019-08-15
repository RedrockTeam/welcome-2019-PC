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
        title: '大西北',
        content: [
          '大西北背靠中心食堂，面朝着宁静苑4舍，同中心食堂一般，因着优越的地理位置成为了学生上课早餐首选。靠着北方师傅的一手好厨艺，虽说是地处川渝地区，但也能品味到一两点奢侈的北方滋味。不同于其他食堂的是，大西北食堂的空间较小，堂食的学生较少，更多的青睐来自于它极为迅敏的打包速度。',
          '推荐菜品：羊肉泡馍，大盘鸡盖饭',
          '人均消费：8元',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/img/dxb1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/dxb2.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/img/dxb3.jpg'),
      ],
    }
  },
}
</script>
