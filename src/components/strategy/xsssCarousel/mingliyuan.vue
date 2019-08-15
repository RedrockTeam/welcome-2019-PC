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
        title: '明理苑（24—31栋，39栋）',
        content: [
          '位于千喜鹤食堂正街上，可以俯瞰全校以及南山的部分美丽景色，这里也是重邮夏天最凉爽的地方。可以坐私家车直达寝室，周围有两个超市和商铺，并且校车穿过。每个寝室都为6人间，并设有独立卫生间，每一栋楼里面配置有洗衣机可供大家使用，应有尽有，可以尽情满足同学们的平日生活需求。',
        ],
      },
      img: [
        require('../../../assets/img/Strategy/xueshengsushe/ml1.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ml2.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ml3.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ml4.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ml5.jpg'),
        require('../../../assets/img/Strategy/xueshengsushe/ml6.jpg'),
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
