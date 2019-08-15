<template>
  <Frame styles="belt">
    <div class="header">
      <frame-button
        v-for="(btn, index) of btns"
        :key="index"
        :isActive="btn.isActive"
        @click.native="changePage(btn.tag)"
        :style="{
          margin: btn.tag === 'qianxihe' || btn.tag === 'honggaoliang'
            ? '0 100px 20px'
            : '0 0 20px'
        }"
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
import xyyCarousel from '@/components/strategy/xsstCarousel/xyyCarousel.vue'
import qxhCarousel from '@/components/strategy/xsstCarousel/qxhCarousel.vue'
import ysCarousel from '@/components/strategy/xsstCarousel/ysCarousel.vue'
import dxbCarousel from '@/components/strategy/xsstCarousel/dxbCarousel.vue'
import hglCarousel from '@/components/strategy/xsstCarousel/hglCarousel.vue'
import zxstCarousel from '@/components/strategy/xsstCarousel/zxstCarousel.vue'

export default {
  components: {
    Frame,
    ScrollBar,
    FrameButton,
    xingyeyuan: xyyCarousel,
    qianxihe: qxhCarousel,
    yansheng: ysCarousel,
    daxibei: dxbCarousel,
    honggaoliang: hglCarousel,
    zhongxin: zxstCarousel,
  },
  data() {
    return {
      current: 'zhongxin',
      btns: [
        {
          tag: 'zhongxin',
          content: '中心食堂',
          isActive: true,
        },
        {
          tag: 'qianxihe',
          content: '千喜鹤',
          isActive: false,
        },
        {
          tag: 'xingyeyuan',
          content: '兴业苑',
          isActive: false,
        },
        {
          tag: 'daxibei',
          content: '大西北',
          isActive: false,
        },
        {
          tag: 'honggaoliang',
          content: '红高粱',
          isActive: false,
        },
        {
          tag: 'yansheng',
          content: '延生',
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
  height: 160px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #87a6ff;
  padding-top: 17px;
}
.scroll-bar {
  width: 876px;
  height: 326px;
  margin-top: 14px;
  border: 3px solid #397dda;
  background: #b0cfff;
}
</style>
