<template>
    <div id="chongyoufengcai">
        <title1 class="title" :isFire="isFire">重邮风采</title1>
        <div class="road">
            <div class="car1 car">
            </div>
            <div class="car2 car">
            </div>
            <div class="car3 car">
            </div>
            <div class="car4 car">
            </div>
            <div class="car5 car">
            </div>
        </div>
        <div class="bg" ref="bg">
            <ul>
                <img class="img" src="../assets/img/Chongyoufengcai/img2.png">
                <p>丰富多彩的组织生活是大学中绚丽的一抹色彩，不用犹豫不决，挑花眼，这里为你解开谜团！</p>
                <button1 class="button">组织大全</button1>
            </ul>
            <ul>
                <img class="img" src="../assets/img/Chongyoufengcai/img1.png">
                <p>短短文字记录了他们在大学青春美好时光里，用实干、奋斗谱写的“化鱼成龙”的征程，致敬前辈，畅想未来。</p>
                <button1 class="button">优秀代表</button1>
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
  margin: 63px auto 19px;
}
.bg {
    position: relative;
    margin: 0 auto;
    width: 1066px;
    height: 514px;
    background: url("../assets/img/Chongyoufengcai/cyfcBG.png") no-repeat;
    ul {
        float: left;
        width: 346px;
        height: 368px;
        margin-left: 85px;
        position: relative;
        top: 7px;
        left: 60px;
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

.road {
    float: left;
    height: 100px;
    width: 980px;
    position: relative;
    top: 5px;
    left: 220px;
    .car {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 10px;
        animation: car 7.5s linear infinite;
        left: 0;
    }
    .car2 {
        animation-delay: 1.5s;
    }
    .car3 {
        animation-delay: 3s;
    }
    .car4 {
        animation-delay: 4.5s;
    }
    .car5 {
        animation-delay: 6s;
    }
}
@keyframes car {
    0% {
        top: 10px;
        left: 0;
        transform: rotate(0deg);
    }
    80% {
        top: 10px;
        left: 668px;
        transform: rotate(0deg);
    }
    85% {
        top: 10px;
        left: 674px;
        transform: rotate(45deg);
    }
    90% {
        top: 20px;
        left: 682px;
        transform: rotate(90deg);
    }
    95% {
        top: 80px;
        left: 690px;
        transform: rotate(90deg);
    }
    98% {
        top: 80px;
        left: 0;
        transform: rotate(0deg);
    }
    100% {
        top: 10px;
        left: 0;
        transform: rotate(0deg);
    }
}
</style>
