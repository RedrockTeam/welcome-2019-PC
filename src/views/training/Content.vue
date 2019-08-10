<template>
  <Frame styles="belt">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/training/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
    </div>
    <scroll-bar class="scroll-bar">
      <div class="contents">
        <div
          class="content"
          v-for="(content, index) of contents"
          :key="index"
        >
          <div class="content-img" :style="`background-image: url(${content.imgUrl})`"></div>
          <div class="content-title">{{ content.title }}</div>
        </div>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import huiyan from '@/assets/img/Junxunteji/huiyan.png'
import jingli from '@/assets/img/Junxunteji/jingli.png'
import zhengbu from '@/assets/img/Junxunteji/zhengbu.png'
import qibu from '@/assets/img/Junxunteji/qibu.png'
import shouyucao from '@/assets/img/Junxunteji/shouyucao.png'
import juntiquan from '@/assets/img/Junxunteji/juntiquan.png'
import gedoushu from '@/assets/img/Junxunteji/gedoushu.png'
import zhanjunzi from '@/assets/img/Junxunteji/zhanjunzi.png'
import fangkongyanxi from '@/assets/img/Junxunteji/fangkongyanxi.png'

export default {
  components: {
    Frame,
    ScrollBar,
    FrameButton,
  },
  data() {
    return {
      activeBtn: 'content',
      btns: [
        {
          tag: 'tips',
          content: '军训贴士',
        },
        {
          tag: 'content',
          content: '训练内容',
        },
        {
          tag: 'video',
          content: '历年视频',
        },
        {
          tag: 'discipline',
          content: '军训纪律',
        },
      ],
      contents: [
        {
          title: '军训汇演',
          imgUrl: huiyan,
        },
        {
          title: '敬礼',
          imgUrl: jingli,
        },
        {
          title: '正步',
          imgUrl: zhengbu,
        },
        {
          title: '齐步',
          imgUrl: qibu,
        },
        {
          title: '手语操',
          imgUrl: shouyucao,
        },
        {
          title: '军体拳',
          imgUrl: juntiquan,
        },
        {
          title: '格斗术',
          imgUrl: gedoushu,
        },
        {
          title: '站军姿',
          imgUrl: zhanjunzi,
        },
        {
          title: '防空演习',
          imgUrl: fangkongyanxi,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.header {
  @include frameHeaderStyle;
  z-index: 1;
}
.scroll-bar {
  width: 870px;
  height: 382px;
  position: absolute;
  top: 122px;
  border: 3px solid #397dda;
  background: #b0cfff;
}
.contents {
  @include frameContentStyle;
  margin-top: 0;
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  padding-bottom: 0;
  .content {
    &:nth-child(2n-1) {
      margin: 0 30px 0 54px;
    }
    &:nth-child(2n) {
      margin: 0 54px 0 30px;
    }
    width: 340px;
    height: 360px;
    .content-title {
      height: 60px;
      text-align: center;
      padding-top: 8px;
      font-size: 18px;
      font-family: '微软雅黑';
      color: #0231a9;
    }
    .content-img {
      height: 300px;
      border: 3px solid #0437c8;
      background-size: auto 340px;
      background-position: center center;
    }
  }
}
</style>
