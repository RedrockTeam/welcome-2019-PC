<template>
    <div id="chongyoufengcai">
        <title1 class="title">重邮风采</title1>
        <div class="bg">
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
    </div>
</template>


<script>
import Title from '@/components/Title.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'chongyoufengcai',
  components: {
    title1: Title,
    button1: Button,
  },
}
</script>


<style lang="scss" scoped>
.title {
  margin: 63px auto 20px;
}
.bg {
    position: relative;
    margin: 0 auto;
    width: 1066px;
    height: 514px;
    background: url("../assets/img/Chongyoufengcai/cyfcBG.png");
    ul {
        float: left;
        width: 346px;
        height: 368px;
        margin-left: 85px;
        position: relative;
        top: 108px;
        left: 60px;
        p {
          text-align: center;
            height: 40px;
            overflow: hidden;
            margin-top: 20px;
            font-size: 12px;
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
