<template>
  <div>
    <my-nav />
    <Banner />
  </div>
</template>

<script>
import MyNav from '@/components/MyNav/MyNav.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    MyNav,
    Banner,
  },
}
</script>

<style scoped lang="scss">
div {
  height: 694px;
  background: #b0ceff;
}
</style>
