<template>
    <div id="chongyoufengcai">
        <title1 class="title" :isFire="isFire">重邮风采</title1>
        <belt-animation class="belt-animation" />
        <div class="bg" ref="bg">
            <ul class="left">
                <img class="img" src="../assets/img/Chongyoufengcai/img2.png">
                <p>丰富多彩的组织生活是大学中绚丽的一抹色彩，不用犹豫不决，挑花眼，这里为你解开谜团！</p>
                <router-link to="/styles/organization">
                <button1 class="button">组织大全</button1>
                </router-link>
            </ul>
            <ul class="right">
                <img class="img" src="../assets/img/Chongyoufengcai/img1.png">
                <p>短短文字记录了他们在大学青春美好时光里，用实干、奋斗谱写的“化鱼成龙”的征程，致敬前辈，畅想未来。</p>
                <router-link to="/styles/excellent">
                  <button1 class="button">优秀代表</button1>
                </router-link>
            </ul>
        </div>
        <content-bg :isFire="isFire" @on-fire="fire()" />
    </div>
</template>


<script>
import Title from '@/components/base/Title.vue'
import Button from '@/components/base/Button.vue'
import ContentBg from '@/components/base/ContentBg.vue'
import BeltAnimation from '@/components/base/BeltAnimation.vue'

export default {
  components: {
    title1: Title,
    button1: Button,
    ContentBg,
    BeltAnimation,
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

#chongyoufengcai {
  position: relative;
}
.title {
  margin: 63px auto 19px;
}
.belt-animation {
  position: absolute;
  top: 136px;
  left: 220px;
}
.bg {
    position: relative;
    margin: 0 auto;
    width: 1066px;
    height: 514px;
    background: url("../assets/img/Chongyoufengcai/cyfcBG.png") no-repeat;
    .left {
      left: 60px;
    }
    .right {
      right: 144px;
    }
    ul {
        float: left;
        width: 346px;
        height: 368px;
        margin-left: 85px;
        position: absolute;
        top: 107px;
        p {
          text-align: center;
            height: 40px;
            overflow: hidden;
            margin-top: 20px;
            font-size: $contentFontSize;
            width: 346px;
            font-family: "宋体";
            color: white;
        }
        .img {
            position: relative;
            top: 3px;
            width: 338px;
            height: 245px;
            left: 4px;
        }
        .button {
            margin-top: 10px;
            margin-left: 100px;
        }

    }
}
</style>
