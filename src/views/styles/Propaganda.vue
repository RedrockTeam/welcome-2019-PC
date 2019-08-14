<template>
<div>
  <div class="dialog" :style="{ display: isOpen ? 'flex' : 'none' }">
    <div class="wrapper">
      <div class="close" @click="close()">
        <div class="close-icon"></div>
      </div>
      <video class="content" :src="videos[this.video]" controls>
        求求你换个浏览器吧。。。1551。。。
      </video>
    </div>
  </div>

  <Frame styles="bubble">
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
      <li>
          <div class="img4 img" @click="showIt(3)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2018年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img3 img" @click="showIt(2)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2017年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img5 img" @click="showIt(4)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2016年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img6 img" @click="showIt(5)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>鸟瞰新重邮</span>
          </div>
      </li>
      <li>
          <div class="img7 img" @click="showIt(6)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>重邮2018樱花季专题</span>
          </div>
      </li>
      <li>
          <div class="img1 img"  @click="showIt(0)"></div>
          <div class="grey"></div>
          <div class="p">
              <span >重邮2017招生宣传片</span>
          </div>
      </li>
      <li>
          <div class="img2 img" @click="showIt(1)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>重邮2017级学生军训汇演</span>
          </div>
      </li>
      <li>
          <div class="img8 img" @click="showIt(7)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>《春风十里》重邮版</span>
          </div>
      </li>
      <li>
          <div class="img9 img" @click="showIt(8)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>航拍重邮第九届校运会</span>
          </div>
      </li>
    </scroll-bar>
  </Frame>
</div>
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
      activeBtn: 'propaganda',
      video: 0,
      videos: [
        require('../../assets/video/xuanchuan/1.mp4'),
        require('../../assets/video/xuanchuan/2.mp4'),
        require('../../assets/video/xuanchuan/3.mp4'),
        require('../../assets/video/xuanchuan/4.mp4'),
        require('../../assets/video/xuanchuan/5.mp4'),
        require('../../assets/video/xuanchuan/6.mp4'),
        require('../../assets/video/xuanchuan/7.mp4'),
        require('../../assets/video/xuanchuan/8.mp4'),
        require('../../assets/video/xuanchuan/9.mp4'),
      ],
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
  methods: {
    showIt(num) {
      this.isOpen = true
      this.video = num
    },
    close() {
      this.isOpen = false
    },
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
.dialog {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    position: relative;
    padding: 38px;
    background: #7195fb;
    display: flex;
    justify-content: center;
    align-items: center;
    .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 38px;
      height: 38px;
      border: 1px solid #002dae;
      background: #1965d7;
      .close-icon {
        width: 30px;
        height: 8px;
        background: #fff;
        transform: rotate(45deg) translate(12px, 8px);
        position: relative;
        &::after {
          display: block;
          position: absolute;
          content: '';
          width: 30px;
          height: 8px;
          background: #fff;
          transform: rotate(90deg);
        }
      }
    }
    .content {
      background: #8eaafd;
      border: 4px solid #0235c7;
      font-size: 14px;
    }
  }
}
.scroll-bar {
  margin-top: 120px;
  width: 870px;
  height: 382px;
  border: 3px solid #397dda;
  background: #b0cfff;

    li {
        width: 235px;
        height: 235px;
        margin-left: 38px;
        margin-top: 26px;
        float: left;
        &:nth-child(7) {
          margin-bottom: 26px;
        }
        .img {
            cursor: pointer;
            width: 235px;
            height: 235px;
            background-color: rgb(176, 207, 255);
            border: 2px solid rgb(57, 125, 218);
        }

.img1 {
    background-image: url(../../assets/img/Landscape/xuanchuan/1.jpg)
}
.img2 {
    background-image: url(../../assets/img/Landscape/xuanchuan/2.jpg)
}
.img3 {
    background-image: url(../../assets/img/Landscape/xuanchuan/3.jpg)
}
.img4 {
    background-image: url(../../assets/img/Landscape/xuanchuan/4.jpg)
}
.img5 {
    background-image: url(../../assets/img/Landscape/xuanchuan/5.jpg)
}
.img6 {
    background-image: url(../../assets/img/Landscape/xuanchuan/6.jpg)
}
.img7 {
    background-image: url(../../assets/img/Landscape/xuanchuan/7.jpg)
}
.img8 {
    background-image: url(../../assets/img/Landscape/xuanchuan/8.jpg)
}
.img9 {
    background-image: url(../../assets/img/Landscape/xuanchuan/9.jpg)
}
        .grey {
            width: 231px;
            height: 41px;
            background-color: rgb(94, 108, 143);
            opacity: 0.5;
            position: relative;
            bottom: 43px;
            left: 2px;
        }
        .p {
            width: 231px;
            height: 41px;
            position: relative;
            bottom: 83px;
            left: 2px;
            text-align: center;
        }
        span {
            font-size: 18px;
            font-family: '微软雅黑';
            color: white;
            position: relative;
            top: 7px;
            opacity: 1;
        }
        img {
            position: absolute;
            top: 35px;
        }
    }
}
</style>
