<template>
    <div id="guanyuwomen">
        <title1 class="title" :isFire="isFire">关于我们</title1>
        <h-bubble-animation class="h-bubble-animation" />
        <div class="bg" ref="bg">
            <div class="left">
            </div>
            <div class="right">
                <article>
                  重庆邮电大学红岩网校工作站是一个校园互联网开发学生团队。
                  该团队自2000年创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。
                  红岩网校工作站在校团委老师的指导下，由学生自我管理，多年来走出了一大批优秀的IT人才，深受电信运营商和BAT等知名互联网企业的青睐。
                  团队先后获评“全国五四红旗团支部”“团中央新媒体专业工作室”“重庆市IT杰出青年群体”等系列荣誉。
                </article>
                <a href="https://redrock.team/aboutus/" target="block">
                  <button1 class="button">了解更多</button1>
                </a>
            </div>
        </div>
        <content-bg :isFire="isFire" @on-fire="fire()" />
    </div>
</template>

<script>
import Title from '@/components/base/Title.vue'
import Button from '@/components/base/Button.vue'
import ContentBg from '@/components/base/ContentBg.vue'
import HBubbleAnimation from '@/components/base/HBubbleAnimation.vue'

export default {
  data() {
    return {
      isFire: false,
    }
  },
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
    HBubbleAnimation,
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

#guanyuwomen {
  padding-bottom: 114px;
  position: relative;
}
.title {
  margin: 70px auto 12px;
}
.h-bubble-animation {
  position: absolute;
  top: 82px;
  left: 320px;
  z-index: 1;
}
.bg {
    position: relative;
    left: -50px;
    margin: 0 auto;
    width: 1136px;
    height: 422px;
    background: url(../assets/img/Guanyuwomen/guanyuwomen.png) no-repeat;
  background-size: 100% 100%;
    div {
        float: left;
    }
}
.left {
    width: 300px;
    height: 212px;
    background-color: antiquewhite;
    position: relative;
    top: 110px;
    left: 234px;
    background: url(../assets/img/Guanyuwomen/img1.png) no-repeat center;
    background-size: cover;
}
.right {
    position: relative;
    left: 266px;
    top: 115px;
    width: 455px;
    line-height: 24px;
    article {
        height: 100px;
        overflow: hidden;
        text-indent: 20px;
        position: relative;
        height: 150px;
        width: 456px;
        font-size: $contentFontSize;
        font-family: '微软雅黑';
        color: white;
    }
    .button {
        float: right;
        margin-top: 20px;
    }
}
</style>
