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
    <div class="contents">
      <div class="title-wrapper">
        <div
          v-for="(title, index ) of titles"
          :class="{ title: true, active: title === activeTitle }"
          :key="index"
          @click="changeVideo(title)"
        >{{ title }}<div class="dec"></div></div>
      </div>
      <div class="video-wrapper">
        <video :src="video[activeTitle]" controls>求求你换个浏览器吧。。。1551。。。</video>
      </div>
    </div>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import huiyan from '@/assets/video/1.mp4'
import xuanchuanpian from '@/assets/video/2.mp4'
import pianduan from '@/assets/video/3.mp4'

export default {
  components: {
    Frame,
    FrameButton,
  },
  data() {
    return {
      activeTitle: '军训汇演',
      activeBtn: 'video',
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
      titles: [
        '军训汇演',
        '军训宣传片',
        '军训片段',
      ],
      video: {
        军训汇演: huiyan,
        军训宣传片: xuanchuanpian,
        军训片段: pianduan,
      },
    }
  },
  methods: {
    changeVideo(title) {
      this.activeTitle = title
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.header {
  @include frameHeaderStyle;
  z-index: 1;
}
.contents {
  .title-wrapper {
    width: 870px;
    height: 45px;
    margin-top: 124px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 290px;
      height: 45px;
      border: 2px solid #1644c5;
      background: #174bdd;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      color: #c0f7fe;
      padding-bottom: 4px;
      cursor: pointer;
      &.active {
        background: #43b2ff;
        color: #fff;
        .dec {
          height: 4px;
          margin-top: -2px;
          background: #174bdd;
        }
      }
      .dec {
        height: 2px;
        margin-top: -2px;
        background: #fff;
      }
    }
  }
  .video-wrapper {
    width: 870px;
    height: 330px;
    margin-top: 7px;
    border: 3px solid #397dda;
    background: #b0cfff;
    display: flex;
    justify-content: center;
    align-items: center;
    video {
      width: 483px;
      height: 276px;
      border: 3px solid #0235c7;
    }
  }
}
</style>
