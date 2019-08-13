<template>
  <Frame styles="belt">
    <div class="header">
      <frame-button
        v-for="(btn, index) of btns"
        :key="index"
        :isActive="btn.isActive"
        @click.native="changePage(btn.tag)"
      >{{ btn.content }}</frame-button>
    </div>
    <scroll-bar class="scroll-bar">
      <div class="contents">
        <component :is="current" ></component>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
/* eslint-disable no-param-reassign */
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import mingli from '@/components/strategy/xsssCarousel/mingliyuan.vue'
import ningjing from '@/components/strategy/xsssCarousel/ningjingyuan.vue'
import xingye from '@/components/strategy/xsssCarousel/xingyeyuan.vue'
import zhixing from '@/components/strategy/xsssCarousel/zhixingyuan.vue'

export default {
  components: {
    Frame,
    ScrollBar,
    FrameButton,
    mingli,
    ningjing,
    xingye,
    zhixing,
  },
  data() {
    return {
      current: 'mingli',
      btns: [
        {
          tag: 'mingli',
          content: '明理苑',
          isActive: true,
        },
        {
          tag: 'xingye',
          content: '兴业苑',
          isActive: false,
        },
        {
          tag: 'ningjing',
          content: '宁静苑',
          isActive: false,
        },
        {
          tag: 'zhixing',
          content: '知行苑',
          isActive: false,
        },
      ],
    }
  },
  methods: {
    changePage(page) {
      this.current = page
      this.btns = this.btns.map((btn) => {
        if (btn.tag === page) {
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
@import '@/assets/style/mixin.scss';

.header {
  width: $frameContentWidth + 6;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #87a6ff;
  padding-top: 20px;
}
.scroll-bar {
  width: 876px;
  height: 400px;
  margin-top: 18px;
  border: 3px solid #397dda;
  background: #b0cfff;
}
</style>
