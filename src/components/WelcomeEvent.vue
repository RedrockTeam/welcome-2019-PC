<template>
    <div id="yingxinhuodong">
        <title1 class="title" :isFire="isFire">迎新活动</title1>
        <v-bubble-animation class="v-bubble-animation" />
        <div class="bg" ref="bg">
            <div class="right-content">
              <div class="right-head"></div>
              <div class="gantanhao"></div>
              <div class="right-title"></div>
              <p class="content">
                  简单选择形成叙述自我，绘出完整邮子画像，由你碰撞发现更多精彩。
              </p>
              <router-link to="/event/portrait">
                <button1 class="button">了解更多</button1>
              </router-link>
            </div>
            <div class="left-content">
              <div class="left-head"></div>
              <div class="wenhao"></div>
              <div class="left-title"></div>
                <p class="content">
                    想知道重邮校园的秘密？想和学长学姐零距离接触？热心的学长学姐都在这里，他们是重邮小百科，为你答疑解惑！
                </p>
                <router-link to="/event/help">
                  <button1 class="button">了解更多</button1>
                </router-link>
            </div>
        </div>
        <content-bg :isFire="isFire" @on-fire="fire()" />
    </div>
</template>


<script>
import Title from '@/components/base/Title.vue'
import Button from '@/components/base/Button.vue'
import ContentBg from '@/components/base/ContentBg.vue'
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'

export default {
  name: 'yingxinhuodong',
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
    VBubbleAnimation,
  },
  data() {
    return {
      isFire: false,
    }
  },
  methods: {
    fire() {
      this.isFire = !this.isFire
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';

#yingxinhuodong {
  position: relative;
}
.title {
  margin: 70px auto 12px;
}
.v-bubble-animation {
  position: absolute;
  top: 58px;
  right: 145px;
  z-index: 1;
}
.bg {
    width: 1083px;
    height: 521px;
    position: relative;
    left: 42px;
    margin: 0 auto;
    background: url(../assets/img/Yingxinhuodong/bg.png);
  background-size: 100% 100%;
    .right-content {
        position: absolute;
        right: 140px;
        top: 360px;
      .right-head {
        position: absolute;
        top: -267px;
        left: 52px;
        width: 225px;
        height: 144px;
        background: url(../assets/img/Yingxinhuodong/right-head.png);
  background-size: 100% 100%;
        animation: shake 2s infinite;
      }
      .gantanhao {
        position: absolute;
        top: -246px;
        left: 19px;
        width: 23px;
        height: 37px;
        background: url(../assets/img/Yingxinhuodong/gantanhao.png);
  background-size: 100% 100%;
        animation: doudong 2s infinite;
        transform-origin: center bottom;
      }
      .right-title {
        position: absolute;
        top: -165px;
        left: 49px;
        width: 243px;
        height: 99px;
        background: url(../assets/img/Yingxinhuodong/right-title.png);
  background-size: 100% 100%;
      }
    }
    .content {
      height: 80px;
      overflow: hidden;
      font-size: $contentFontSize;
      width: 318px;
      font-family: '微软雅黑';
      color: white;
      text-align: center;
    }
    .button {
      margin: -9px auto 0;
    }
    .left-content {
        position: absolute;
        left: 70px;
        top: 360px;
      .left-head {
        position: absolute;
        top: -244px;
        left: 35px;
        width: 213px;
        height: 120px;
        background: url(../assets/img/Yingxinhuodong/left-head.png);
  background-size: 100% 100%;
        animation: shake 2s infinite;
      }
      .wenhao {
        position: absolute;
        top: -248px;
        right: 44px;
        width: 32px;
        height: 40px;
        background: url(../assets/img/Yingxinhuodong/wenhao.png);
  background-size: 100% 100%;
        animation: doudong 2s infinite;
        transform-origin: center bottom;
      }
      .left-title {
        position: absolute;
        top: -131px;
        left: 28px;
        width: 227px;
        height: 66px;
        background: url(../assets/img/Yingxinhuodong/left-title.png);
  background-size: 100% 100%;
      }
    }
}
@keyframes shake {
  from { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
  to { transform: rotate(0deg); }
}
@keyframes doudong {
  0% { transform: rotate(0deg); }
  5% { transform: rotate(10deg); }
  10% { transform: rotate(0deg); }
  15% { transform: rotate(10deg); }
  20% { transform: rotate(0deg); }
}
</style>
