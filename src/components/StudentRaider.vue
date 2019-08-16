<template>
    <div id="youzigonglue">
        <title1 class="title" :isFire="isFire">邮子攻略</title1>
        <v-bubble-animation class="v-bubble-animation" />
        <h-bubble-animation class="h-bubble-animation" />
        <div class="bg1" ref="bg">
            <ul>
                <li class="li1">
                    <span>新生清单</span>
                    <p>大学新生报道必备清单，尽快启程新生活</p>
                    <router-link to="/raider/list">
                      <button1 class="btn">了解更多</button1>
                    </router-link>
                </li>
                <li class="li2">
                    <span>交通路线</span>
                    <p>交通路线四通八达，终汇重邮</p>
                    <router-link to="/raider/traffic">
                    <button1 class="btn">了解更多</button1>
                    </router-link>
                </li>
                <li class="li3">
                    <span>周边生活</span>
                    <p>汇总周边美食，集结生活信息</p>
                    <router-link to="/raider/life">
                    <button1 class="btn">了解更多</button1>
                    </router-link>
                </li>
                <li class="li4">
                    <span>网址大全</span>
                    <p>你想要的我都“邮”，通往各网站的窗口</p>
                    <a href="http://hongyan.cqupt.edu.cn/web/" target="block">
                      <button1 class="btn">了解更多</button1>
                    </a>
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
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'
import HBubbleAnimation from '@/components/base/HBubbleAnimation.vue'

export default {
  name: 'youzigonglue',
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
    VBubbleAnimation,
    HBubbleAnimation,
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

#youzigonglue {
    margin:  0 auto;
    position: relative;
    .title {
      margin: 0 auto 12px;
    }
}
.v-bubble-animation {
  position: absolute;
  top: -57px;
  right: 144px;
  z-index: 1;
}
.h-bubble-animation {
  position: absolute;
  top: 85px;
  left: 320px;
  z-index: 1;
}
.bg1 {
    width: 1117px;
    height: 406px;
    background: url(../assets/img/Youzigonglue/yzglBG.png) no-repeat;
    position: relative;
    margin: 0 auto;
    left: 25px;
}
ul {
    list-style: none;
    position: absolute;
    top: 283px;
    left: 20px;
    li {
        float: left;
        text-align: center;
        .btn {
            position: absolute;
            top: 10px;
            margin-left: 25px;
        }
    }
    .li1 {
        margin-left: 75px;
        margin-top: -50px;
    }
    .li2 {
        margin-left: 50px;
        margin-top: -50px;
    }
    .li3 {
        margin-left: 50px;
        margin-top: -50px;
    }
    .li4 {
        margin-left: 50px;
        margin-top: -50px;
    }
    span {

        text-align: center;
        font-family: "微软雅黑";
        font-size: 18px;
        color: white;

    }
    p {
        height: 40px;
        width: 181px;
        font-size: $contentFontSize;
        font-family: '微软雅黑';
        color: white;
        margin: 10px 0 0;
    }
}
</style>
