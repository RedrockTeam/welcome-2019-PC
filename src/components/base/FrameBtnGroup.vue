<template>
  <div class="header">
    <frame-button
      v-for="(btn, index) of myBtns"
      :key="index"
      :isActive="btn.isActive"
      @click.native="switchTo(btn.tag)"
    >{{ btn.content }}</frame-button>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
import FrameButton from '@/components/base/FrameButton.vue'

export default {
  props: {
    btns: Array,
  },
  components: {
    FrameButton,
  },
  data() {
    return {
      myBtns: this.btns.map((btn, index) => {
        if (index === 0) {
          btn.isActive = true
        } else {
          btn.isActive = false
        }
        return btn
      }),
    }
  },
  methods: {
    switchTo(tag) {
      this.$emit('changePage', tag)
      this.myBtns = this.myBtns.map((btn) => {
        if (btn.tag === tag) {
          btn.isActive = true
        } else {
          btn.isActive = false
        }
        return btn
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.header {
  width: $frameContentWidth;
  height: 120px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  background: #87a6ff;
  padding-top: 39px;
  z-index: 1;
}
</style>
