<template>
  <div class="frame lantern">
    <btn-animation class="btn-animation" />
    <v-bubble-animation class="v-bubble-animation" />
    <router-view></router-view>
  </div>
</template>

<script>
import BtnAnimation from '@/components/base/BtnAnimation.vue'
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'

export default {
  props: {
    styles: String,
  },
  components: {
    BtnAnimation,
    VBubbleAnimation,
  },
}
</script>

<style lang="scss" scoped>
.lantern {
  background: url(../assets/img/Frame/lanternFrame.png), #b0ceff;
}
.frame {
  position: relative;
  width: 1204px;
  height: 607px;
  margin: 0 auto 20px;
  .btn-animation {
    position: absolute;
    top: 50px;
    left: 295px;
  }
  .v-bubble-animation {
    position: absolute;
    top: -35px;
    left: 26px;
  }
}
</style>
