<template>
    <div id="chongyoufengcai">
        <title1>重邮风采</title1>
        <div class="road">
            <div class="car1">
            </div>
            <div class="car2">
            </div>
            <div class="car3">
            </div>
            <div class="car4">
            </div>
            <div class="car5">
            </div>
        </div>
        <div class="bg">
            <ul>
                <img class="img" src="../../assets/img/Chongyoufengcai/img2.png">
                <p>丰富多彩的组织生活是大学中绚丽的一抹色彩，不用犹豫不决，挑花眼，这里为你解开谜团！</p>
                <button1 class="button">组织大全</button1>
            </ul>
            <ul>
                <img class="img" src="../../assets/img/Chongyoufengcai/img1.png">
                <p>短短文字记录了他们在大学青春美好时光里，用实干、奋斗谱写的“化鱼成龙”的征程，致敬前辈，畅想未来。</p>
                <button1 class="button">优秀代表</button1>
            </ul>
        </div>
    </div>
</template>


<script>
import Title from '../Title'
import Button from '../Button'

export default {
  name: 'chongyoufengcai',
  components: {
    title1: Title,
    button1: Button,
  },
}
</script>


<style lang="scss" scoped>
.bg {
    position: relative;
    top: 12px;
    z-index: 1;
    margin: 0 auto;
    left: -6px;
    width: 1066px;
    height: 513px;
    background: url("../../assets/img/Chongyoufengcai/cyfcBG.png");
    ul {
        float: left;
        width: 346px;
        height: 368px;
        margin-left: 85px;
        position: relative;
        top: 8px;
        left: 60px;
        p {
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

.road {
    float: left;
    height: 100px;
    width: 980px;
    position: relative;
    top: 5px;
    left: 220px;
    .car1 {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 20px;
        z-index: 0;
        animation: car1 10s linear infinite;
        left: 100px;
    }
    .car2 {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 20px;
        z-index: 0;
        animation: car1 10s linear infinite;
        animation-delay: 1.5s;

    }
    .car3 {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 20px;
        z-index: 0;
        animation: car1 10s linear infinite;
        animation-delay: 3s;

    }
    .car4 {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 20px;
        z-index: 0;
        animation: car1 10s linear infinite;
        animation-delay: 4.5s;

    }
    .car5 {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        border: 1px solid rgb(77, 117, 232);
        position: absolute;
        top: 20px;
        z-index: 0;
        animation: car1 10s linear infinite;
        animation-delay: 6s;
    }
}


@keyframes car1 {
    0% {
        top: 20px;
        left: 100px;
        transform: rotate(0deg)
    }
    30% {
        top: 20px;
        left: 350px;
        transform: rotate(0deg)
    }
    60% {
        top: 20px;
        left: 660px;
        transform: rotate(0deg)
    }
    67% {
        top: 20px;
        left: 670px;
        transform: rotate(60deg)
    }
    90% {
        top: 100px;
        left: 800px;
    }
    91% {
        top: 300px;
        transform: rotate(0deg)
    }
    92% {
        top: 300px;
        left: 0px;
    } 
    93% {
        top: 20px;
        left: 0px;
    }
    100% {
        top: 20px;
        left: 100px;
    }
}

</style>
