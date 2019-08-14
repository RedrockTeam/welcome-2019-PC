<template>
  <Frame styles="belt">
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
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img2 img"></div>
            <span>八十万</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img3 img"></div>
            <span>别有洞天</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img4 img"></div>
            <span>春华秋实</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img5 img"></div>
            <span>二教夕阳</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img6 img"></div>
            <span>高山流水</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img7 img"></div>
            <span>林荫大道</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img8 img"></div>
            <span>鸟瞰重邮</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img9 img"></div>
            <span>情人坡</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img10 img"></div>
            <span>数字图书馆</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img11 img"></div>
            <span>仰望八教</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img12 img"></div>
            <span>逸夫楼</span>
            <div class="bottom">
                <img src="../../assets/img/life/locationIcon.png"><p>重庆邮电大学</p>
            </div>
        </li>
        <li>
            <div class="img13 img"></div>
            <span>雨红莲</span>
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
  height: 60px;
}
.scroll-bar {
  margin-top: 120px;
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
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img1.jpg)
    }
    .img2 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img2.jpg)
    }
    .img3 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img3.jpg)
    }
    .img4 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img4.jpg)
    }
    .img5 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img5.jpg)
    }
    .img6 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img6.jpg)
    }
    .img7 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img7.jpg)
    }
    .img8 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img8.jpg)
    }
    .img9 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img9.jpg)
    }
    .img10 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img10.jpg)
    }
    .img11 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img11.jpg)
    }
    .img12 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img12.jpg)
    }
    .img13 {
        background-image: url(../../assets/img/Landscape/youyuanfengguang/img13.jpg)
    }
  }
}
</style>
