<template>
<div>
  <Track class="left-track" />
  <Track class="right-track" />
  <QRcode />
  <Frame styles="bubble">
    <scroll-bar class="scroll-bar">
      <div class="tit-bg"></div>
      <div class="contents">
        <div class="text" v-for="(text, index) of texts" :key="index">
          <div class="title">{{ text.title }}：</div>
          <div class="content">{{ text.content }}</div>
        </div>
      </div>
    </scroll-bar>
  </Frame>
</div>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'
import Track from '@/components/layout/Track.vue'
import QRcode from '@/components/layout/QRcode.vue'

export default {
  components: {
    Frame,
    ScrollBar,
    Track,
    QRcode,
  },
  data() {
    return {
      texts: [
        {
          title: '活动主题',
          content: '简单选择形成叙述自我，绘出完整邮子画像，由你碰撞发现更多精彩。',
        },
        {
          title: '活动时间',
          content: '2019.XX.XX',
        },
        {
          title: '参与形式',
          content: '线上公众号“重游小帮手”中参与',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.left-track {
  height: 1146px;
  position: absolute;
  top: 288px;
  left: 0;
  transform: rotateY(180deg);
}
.right-track {
  height: 1146px;
  position: absolute;
  top: 288px;
  right: 0;
}
.scroll-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tit-bg {
    width: 862px;
    height: 418px;
    margin: 18px 0;
    background:
      url(../../assets/img/help/huaxiang.jpg) no-repeat center,
      #e8f4ff;
    background-size: cover;
    border: 3px solid #0235c7;
  }
  .contents {
    width: 862px;
    padding: 15px 30px;
    border: 3px solid #397dda;
    background: #b7d2ff;
    margin-bottom: 15px;
    .text {
      font-family: '微软雅黑';
      color: #1441b1;
      font-size: 18px;
      padding: 15px 0;
      .content {
        color: #4374eb;
        font-size: 14px;
      }
    }
  }
}
</style>
