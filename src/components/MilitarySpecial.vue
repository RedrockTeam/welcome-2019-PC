<template>
    <div id="junxunteji">
        <title1 class="title" :isFire="isFire">军训特辑</title1>
        <v-bubble-animation class="v-bubble-animation" />
        <div class="bg" ref="bg">
          <btn-animation class="btn-animation" />
            <ul>
                <li>
                    <img class="img" src="../assets/img/Junxunteji/img1.png">
                    <p>军训锻炼的是胆量和意识，但也别折了身体。</p>
                    <router-link to="/training/tips">
                      <button1 class="button">军训贴士</button1>
                    </router-link>
                </li>
                <li>
                    <img class="img" src="../assets/img/Junxunteji/img2.png">
                    <p>立正，稍息，正步走，各司其职。消防，手语，大汇报。</p>
                    <router-link to="/training/content">
                      <button1 class="button">训练内容</button1>
                    </router-link>
                </li>
                <li>
                    <img class="img" src="../assets/img/Junxunteji/img3.png">
                    <p>迈着矫健的步伐，挺拔的身姿，跑道上留下他们勇往直前的足迹。</p>
                    <router-link to="/training/video">
                      <button1 class="button">历年视频</button1>
                    </router-link>
                </li>
                <li>
                    <img class="img" src="../assets/img/Junxunteji/img4.png">
                    <p>以军人的标准严格要求自己，别开生面“开学第一课”。</p>
                    <router-link to="/training/discipline">
                      <button1 class="button">军训纪律</button1>
                    </router-link>
                </li>
            </ul>
        </div>
        <content-bg :isFire="isFire" @on-fire="fire()" />
    </div>
</template>


<script>
import Title from '@/components/base/Title.vue'
import Button from '@/components/base/Button.vue'
import ContentBg from '@/components/base/ContentBg.vue'
import BtnAnimation from '@/components/base/BtnAnimation.vue'
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'

export default {
  name: 'junxunteji',
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
    BtnAnimation,
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

#junxunteji {
  position: relative;
}
.title {
  margin: 70px auto 12px;
}
.v-bubble-animation {
  position: absolute;
  top: 120px;
  left: 145px;
  filter: hue-rotate(130deg);
  z-index: 1;
}
.bg {
    position: relative;
    margin: 0 auto;
    left: -25px;
    width: 1116px;
    height: 440px;
    background: url("../assets/img/Junxunteji/jxtjBG.png");
    .btn-animation {
      position: absolute;
      top: 49px;
      left: 275px;
    }
}
ul {
    position: absolute;
    left: 89px;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
        height: 295px;
        width: 181px;
        float: left;
        margin-left: 52px;
        p {
          text-align: center;
            position: relative;
            top: 120px;
            width: 182px;
            height: 60px;
            overflow: hidden;
            font-size: $contentFontSize;
            font-family: '微软雅黑';
            color: white;
        }
        .img {
            position: relative;
            left: 5px;
            top: 110px;
            width: 172px;
            height: 175px;
        }
        .button {
            position: relative;
            top: 122px;
            left: 25px;
        }
    }
}
</style>
