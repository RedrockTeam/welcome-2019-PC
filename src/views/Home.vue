<template>
  <div class="wrapper">
    <Map class="map" />
  </div>
</template>

<script>
import Map from '@/components/Map/Map.vue'

export default {
  name: 'home',
  components: {
    Map,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #b0ceff;
  .map {
    margin: 0 auto;
  }
}
</style>
