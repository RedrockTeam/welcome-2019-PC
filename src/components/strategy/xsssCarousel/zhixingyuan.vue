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
        title: '知行苑（1—6，15,16）',
        content: [
          '位于中心食堂附近的1,5,6栋是学校现存最老的寝室，住宿条件比较差，整体情况是每层楼设有公用的卫生间，洗澡间。但位于校园中心，上课，生活都极为便利。15.16栋寝室则在太极运动场旁边，楼下是商店和快递点，附近有红高粱和兴业苑食堂，十分便利。1.5.6栋寝室为6人间，上下均为床铺，内部没有独立卫生间和阳台。15.16栋则为学校标准的4人间，上床下桌，配有阳台，独立卫生间。',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengsushe/zhixingyuan/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/zhixingyuan/img2.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/zhixingyuan/img3.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/zhixingyuan/img4.jpg'),
      ],
    }
  },
}
</script>
