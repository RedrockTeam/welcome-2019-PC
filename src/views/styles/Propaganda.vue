<template>
<div>
  <Dialog :isOpen="isOpen" @close="onClose()">
    <div class="video-border">
      <video ref="video" class="content" :src="videos[this.video]" controls>
        求求你换个浏览器吧。。。1551。。。
      </video>
    </div>
  </Dialog>

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
          <div class="img4 img" @click="showIt(0)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2018年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img3 img" @click="showIt(1)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2017年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img5 img" @click="showIt(2)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>2016年红岩网校招新视频</span>
          </div>
      </li>
      <li>
          <div class="img6 img" @click="showIt(3)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>鸟瞰新重邮</span>
          </div>
      </li>
      <li>
          <div class="img7 img" @click="showIt(4)"></div>
          <div class="grey"></div>
          <div class="p">
              <span>重邮2018樱花季专题</span>
          </div>
      </li>
      <li>
          <div class="img1 img"  @click="showIt(5)"></div>
          <div class="grey"></div>
          <div class="p">
              <span >重邮2017招生宣传片</span>
          </div>
      </li>
      <li>
          <div class="img2 img" @click="showIt(6)"></div>
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
import Dialog from '@/components/base/Dialog.vue'

export default {
  components: {
    Frame,
    FrameButton,
    ScrollBar,
    Dialog,
  },
  data() {
    return {
      isOpen: false,
      activeBtn: 'propaganda',
      video: 0,
      videos: [
        'http://video.nalgd.top/2018.mp4',
        'http://video.nalgd.top/2017.mp4',
        'http://video.nalgd.top/5.mp4',
        'http://video.nalgd.top/6.mp4',
        'http://video.nalgd.top/7.mp4',
        'http://video.nalgd.top/1.mp4',
        'http://video.nalgd.top/junxun.mp4',
        'http://video.nalgd.top/chunfeng.mp4',
        'http://video.nalgd.top/yundong.mp4',
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
    onClose() {
      this.isOpen = false
      this.$refs.video.pause()
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.video-border {
  background: #8eaafd;
  border: 3px solid #0235c7;
}
.content {
  font-size: 14px;
}
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
    li {
        width: 235px;
        height: 235px;
        margin-left: 31px;
        margin-top: 30px;
        margin-right: 8px;
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
    background-image: url(../../assets/img/Landscape/xuanchuan/2017zhaosheng.jpg);
  background-size: 100% 100%;
}
.img2 {
    background-image: url(../../assets/img/Junxunteji/汇演poster.jpg);
  background-size: 100% 100%;
}
.img3 {
    background-image: url(../../assets/img/Landscape/xuanchuan/3.jpg);
  background-size: 100% 100%;
}
.img4 {
    background-image: url(../../assets/img/Landscape/xuanchuan/4.jpg);
  background-size: 100% 100%;
}
.img5 {
    background-image: url(../../assets/img/Landscape/xuanchuan/5.jpg);
  background-size: 100% 100%;
}
.img6 {
    background-image: url(../../assets/img/Landscape/xuanchuan/niao.jpg);
  background-size: 100% 100%;
}
.img7 {
    background-image: url(../../assets/img/Landscape/xuanchuan/7.jpg);
  background-size: 100% 100%;
}
.img8 {
    background-image: url(../../assets/img/Landscape/xuanchuan/8.jpg);
  background-size: 100% 100%;
}
.img9 {
    background-image: url(../../assets/img/Landscape/xuanchuan/9.jpg);
  background-size: 100% 100%;
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
