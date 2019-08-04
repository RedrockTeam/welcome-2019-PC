<template>
  <div>
    <my-nav />
    <Banner />
    <QRcode />
  </div>
</template>

<script>
import MyNav from '@/components/MyNav/index.vue'
import Banner from '@/components/Banner.vue'
import QRcode from '@/components/QRcode.vue'

export default {
  components: {
    MyNav,
    Banner,
    QRcode,
  },
}
</script>

<style scoped lang="scss">
div {
  background: #b0ceff;
}
</style>
