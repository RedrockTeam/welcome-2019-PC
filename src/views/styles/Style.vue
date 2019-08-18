<template>
  <Frame styles="lantern">
    <div class="header">
      <router-link
        v-for="(btn, index) of btns"
        :key="index"
        :to="`/styles/${btn.tag}`"
      >
        <frame-button :isActive="activeBtn === btn.tag">{{ btn.content }}</frame-button>
      </router-link>
    </div>
    <scroll-bar class="scroll-bar">
      <div class="wrapper">
        <li>
            <div class="img1 img"></div>
            <span>落英缤纷</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>信科大楼</p>
            </div>
        </li>
        <li>
            <div class="img2 img"></div>
            <span>仰望八教</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>第八教学楼</p>
            </div>
        </li>
        <li>
            <div class="img3 img"></div>
            <span>二教绿茵</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>第二教学楼</p>
            </div>
        </li>
        <li>
            <div class="img4 img"></div>
            <span>老图书馆</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>老图书馆</p>
            </div>
        </li>
        <li>
            <div class="img5 img"></div>
            <span>仰望信科</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>信科大楼</p>
            </div>
        </li>
        <li>
            <div class="img6 img"></div>
            <span>游泳池</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>风华操场旁</p>
            </div>
        </li>
        <li>
            <div class="img7 img"></div>
            <span>重邮校徽</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>腾飞门</p>
            </div>
        </li>
        <li>
            <div class="img8 img"></div>
            <span>别有洞天</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>风雨操场</p>
            </div>
        </li>
        <li>
            <div class="img9 img"></div>
            <span>二教夕阳</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>第二教学楼</p>
            </div>
        </li>
        <li>
            <div class="img10 img"></div>
            <span>高山流水</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>信科大楼旁</p>
            </div>
        </li>
        <li>
            <div class="img11 img"></div>
            <span>林荫大道</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img12 img"></div>
            <span>鸟瞰重邮</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import Frame from '@/components/base/Frame.vue'
import FrameButton from '@/components/base/FrameButton.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'

export default {
  components: {
    Frame,
    FrameButton,
    ScrollBar,
  },
  data() {
    return {
      isOpen: false,
      activeBtn: 'style',
      btns: [
        {
          tag: 'organization',
          content: '组织大全',
        },
        {
          tag: 'propaganda',
          content: '宣传视频',
        },
        {
          tag: 'excellent',
          content: '优秀代表',
        },
        {
          tag: 'style',
          content: '邮苑风光',
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
  height: 85px;
  padding-top: 25px;
}
.scroll-bar {
  margin-top: 111px;
  width: 870px;
  height: 382px;
  border: 3px solid #397dda;
  background: #b0cfff;
  .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 27px;
  }
  li {
    margin-top: 28px;
    margin-left: 27px;
    width: 247px;
    height: 303px;
    float: left;
    .img {
        width: 247px;
        height: 247px;
        background-color: rgb(176, 207, 255);
        border: 2px solid #0a3cca;
    }
    span {
      display: block;
        font-size: 18px;
        font-family: '微软雅黑';
        color: rgb(2, 49, 169);
        margin: 6px 0;
    }
    p {
      text-indent: 4px;
        font-size: 12px;
        font-family: '宋体';
        color: rgb(76, 117, 234);
    }
    img {
      float: left;
    }
    .img1 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/落英缤纷.png);
  background-size: 100% 100%;
    }
    .img2 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/八教.jpg);
  background-size: 100% 100%;
    }
    .img3 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/二教绿茵.jpg);
  background-size: 100% 100%;
    }
    .img4 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/老图.jpg);
  background-size: 100% 100%;
    }
    .img5 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/仰望信科.jpg);
  background-size: 100% 100%;
    }
    .img6 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/游泳池.jpg);
  background-size: 100% 100%;
    }
    .img7 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/重邮校徽.jpg);
  background-size: 100% 100%;
    }
    .img8 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/别有洞天.png);
  background-size: 100% 100%;
    }
    .img9 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/二教夕阳.png);
  background-size: 100% 100%;
    }
    .img10 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/高山流水.png);
  background-size: 100% 100%;
    }
    .img11 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/林荫大道.png);
  background-size: 100% 100%;
    }
    .img12 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/鸟瞰重邮.png);
  background-size: 100% 100%;
    }
    .img13 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/数字图书馆.png);
  background-size: 100% 100%;
    }
  }
}
</style>
