<template>
  <div class="frame">
    <btn-animation class="btn-animation" v-if="styles === 'lantern'" />
    <belt-animation class="belt-animation" v-if="styles === 'belt'" />
    <v-bubble-animation class="v-bubble-animation" />
    <h-bubble-animation class="h-bubble-animation" v-if="styles === 'bubble'" />
    <div :class="{
      bg: true,
      lantern: styles === 'lantern',
      belt: styles === 'belt',
      bubble: styles === 'bubble',
    }">
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BtnAnimation from '@/components/base/BtnAnimation.vue'
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'
import BeltAnimation from '@/components/base/BeltAnimation.vue'
import HBubbleAnimation from '@/components/base/HBubbleAnimation.vue'

export default {
  props: {
    styles: String,
  },
  components: {
    BtnAnimation,
    VBubbleAnimation,
    BeltAnimation,
    HBubbleAnimation,
  },
}
</script>

<style lang="scss" scoped>
.lantern {
  background: url(../../assets/img/Frame/lanternFrame.png) no-repeat;
  background-size: 100% 100%;
}
.belt {
  background: url(../../assets/img/Frame/beltFrame.png) no-repeat;
  background-size: 100% 100%;
  div.wrapper {
    margin-top: 112px;
    height: 514px;
  }
}
.bubble {
  background: url(../../assets/img/Frame/bubbleFrame.png) no-repeat;
  background-size: 100% 100%;
}
.frame {
  position: relative;
  width: 1204px;
  height: 643px;
  margin: -2px auto 60px;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .wrapper {
    width: 909px;
    height: 515px;
    margin: 114px 0 0 148px;
    background: #87a6ff;
    overflow: auto;
    position: relative;
    padding-left: 16px;
  }
  .belt-animation {
    position: absolute;
    top: 38px;
    left: 102px;
  }
  .btn-animation {
    position: absolute;
    top: 86px;
    left: 295px;
    z-index: 1;
  }
  .v-bubble-animation {
    position: relative;
    z-index: 1;
    margin: 2px 0 0 26px;
  }
  .h-bubble-animation {
    position: relative;
    z-index: 1;
    margin: -84px 0 0 200px;
  }
}
</style>
