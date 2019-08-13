<template>
  <Frame styles="bubble">
    <scroll-bar class="scroll-bar">
      <div class="tit-bg"></div>
      <div class="contents">
        <div class="text" v-for="(text, index) of texts" :key="index">
          <div class="title">{{ text.title }}</div>
          <div class="content">{{ text.content }}</div>
        </div>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'

export default {
  components: {
    Frame,
    ScrollBar,
  },
  data() {
    return {
      texts: [
        {
          title: '活动主题',
          content: '本科新生2017年9月5、6日报道',
        },
        {
          title: '活动主题',
          content: '本科新生2017年9月5、6日报道',
        },
        {
          title: '活动主题',
          content: '本科新生2017年9月5、6日报道',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.scroll-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tit-bg {
    width: 862px;
    height: 433px;
    margin: 18px 0;
    background:
      url(../../assets/img/help/helpBg.png) no-repeat center,
      #e8f4ff;
    border: 3px solid #0235c7;
  }
  .contents {
    width: 862px;
    padding: 15px 30px;
    border: 3px solid #397dda;
    background: #b7d2ff;
    margin-bottom: 18px;
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
