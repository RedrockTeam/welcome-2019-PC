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
        title: '宁静苑（8—12，32--35）',
        content: [
          '坐落在美丽的情人坡旁，是妹子们散心聊天约会的好去处；篮球、网球、羽毛球这些周围球场为大家的锻炼提供了方便，与新校区紧连，周边分布有“千喜鹤”、“延生”等食堂。宿舍基本为6人间基本情况与22-24相同且有独立的阳台、卫浴，床铺是上下铺与上床下桌的混搭，人流量很少，环境比较清静。',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengsushe/ningjingyuan/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ningjingyuan/img2.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ningjingyuan/img3.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ningjingyuan/img4.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ningjingyuan/img5.jpg'),
      ],
    }
  },
}
</script>
