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
          content: '通过邮子专属的小测试，绘出独一无二的“自我画像”，大数据统计来pick相同选择的“邮苑新知”。',
        },
        {
          title: '活动时间',
          content: '敬请期待',
        },
        {
          title: '参与形式',
          content: '线上公众号“重邮小帮手”中参与',
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
