<template>
    <div id="youzigonglue">
        <title1 class="title" :isFire="isFire">邮子攻略</title1>
        <div class="bg1" ref="bg">
            <ul>
                <li class="li1">
                    <span>新生清单</span>
                    <p>大学新生报道必备清单尽快启程新生活</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li2">
                    <span>交通路线</span>
                    <p>交通路线四通八达，终汇重邮</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li3">
                    <span>周边生活</span>
                    <p>汇总周边美食，集结生活信息</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li4">
                    <span>网址大全</span>
                    <p>你想要的我都“邮”，通往各网站的窗口</p>
                    <button1 class="btn">了解更多 </button1>
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

export default {
  name: 'youzigonglue',
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

#youzigonglue {
    margin:  0 auto;
    .title {
      margin: 0 auto 12px;
    }
}
.bg1 {
    width: 1117px;
    height: 406px;
    background-image: url(../assets/img/Youzigonglue/yzglBG.png);
    position: relative;
    margin: 0 auto;
    left: 25px;
}
ul {
    list-style: none;
    position: absolute;
    top: 300px;
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
        font-family: "宋体";
        color: white;
        margin: 10px 0 0;
    }
}
</style>
