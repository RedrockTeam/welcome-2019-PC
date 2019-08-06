<template>
  <div>
    <my-nav />
    <Banner />

  </div>
</template>

<script>
import MyNav from '@/components/MyNav/index.vue'
import Banner from '@/components/Banner.vue'


export default {
  components: {
    MyNav,
    Banner,

  },
}
</script>

<style scoped>
div {
  background: #b0ceff;
}
</style>
