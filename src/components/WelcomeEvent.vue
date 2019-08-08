<template>
    <div id="yingxinhuodong">
        <title1 class="title" :isFire="isFire">迎新活动</title1>
        <div class="bg" ref="bg">
            <div class="left-content">
                <p class="content">
                    萌新你好，欢迎来鲜肉集中营报道！听说这里有好多萌新的照片，快来为你的班级注入萌新能量，美好的大学生活从认识新同学开始~
                </p>
                <button1 class="button">了解更多</button1>
            </div>
            <div class="right-content">
                <p class="content">
                    萌新你好，欢迎来鲜肉集中营报道！听说这里有好多萌新的照片，快来为你的班级注入萌新能量，美好的大学生活从认识新同学开始~
                </p>
                <button1 class="button">了解更多</button1>
            </div>
        </div>
        <content-bg :isFire="isFire" @on-fire="fire()" />
    </div>
</template>


<script>
import Title from '@/components/base/Title.vue'
import Button from '@/components/base/Button.vue'
import ContentBg from '@/components/base/ContentBg.vue'

export default {
  name: 'yingxinhuodong',
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
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

.title {
  margin: 70px auto 12px;
}
.bg {
    width: 1083px;
    height: 521px;
    position: relative;
    left: 42px;
    margin: 0 auto;
    background: url(../assets/img/Yingxinhuodong/bg.png);
    .left-content {
        position: absolute;
        right: 140px;
        top: 360px;
    }
    .content {
      height: 80px;
      overflow: hidden;
      font-size: $contentFontSize;
      width: 318px;
      font-family: "宋体";
      color: white;
    }
    .button {
      margin: 0 auto;
    }
    .right-content {
        position: absolute;
        left: 70px;
        top: 360px;
    }
}
</style>
