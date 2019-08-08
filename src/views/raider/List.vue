<template>
  <Frame :styles="styles">
    List
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'

export default {
  props: {
    styles: String,
  },
  components: {
    Frame,
  },
}
</script>

<style scoped lang="scss">

</style>
