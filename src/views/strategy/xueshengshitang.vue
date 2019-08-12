<template>
<div class="all">
    <div class="connect"></div>
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
    <div id="v">
        <verticalBubble class="v"></verticalBubble>
    </div>
    <div id="xueshengshitang">
        <div class="allButtons">
            <button1 class="btn" @click.native="change('zxstCarousel')" v-bind:class="{'redbtn1' : now == 'zxstCarousel'}">中心食堂</button1>
            <button1 class="btn" @click.native="change('qxhCarousel') " v-bind:class="{'redbtn1' : now == 'qxhCarousel'}">千喜鹤</button1>
            <button1 class="btn" @click.native="change('xyyCarousel')" v-bind:class="{'redbtn1' : now == 'xyyCarousel'}">兴业苑</button1>
            <button1 class="btn" @click.native="change('dxbCarousel')" v-bind:class="{'redbtn1' : now == 'dxbCarousel'}">大西北</button1>
            <button1 class="btn" @click.native="change('hglCarousel')" v-bind:class="{'redbtn1' : now == 'hglCarousel'}">红高粱</button1>
            <button1 class="btn" @click.native="change('ysCarousel')" v-bind:class="{'redbtn1' : now == 'ysCarousel'}">延生</button1>
        </div>
        <transition mode="out-in">
            <component :is= now ></component>
        </transition>
    </div>
</div>
</template>

<script>
import { setInterval } from 'timers';
import button1 from '../../components/Button1'
import xyyCarousel from '../../components/strategy/xsstCarousel/xyyCarousel'
import qxhCarousel from '../../components/strategy/xsstCarousel/qxhCarousel'
import ysCarousel from '../../components/strategy/xsstCarousel/ysCarousel'
import dxbCarousel from '../../components/strategy/xsstCarousel/dxbCarousel'
import hglCarousel from '../../components/strategy/xsstCarousel/hglCarousel'
import zxstCarousel from '../../components/strategy/xsstCarousel/zxstCarousel'
import verticalBubble from '../../components/flash/verticalBubble'

export default {
  name: 'xueshengshitang',
  components: {
    button1,
    zxstCarousel,
    hglCarousel,
    dxbCarousel,
    ysCarousel,
    qxhCarousel,
    xyyCarousel,
    verticalBubble,
  },
  data() {
    return {
      now: 'zxstCarousel',
      flag: [
        false, false, false, false, false, false,
      ],
    }
  },
  methods: {
    change(msg) {
      this.flag[0] = true
      console.log(this.flag)
      this.now = msg
    },
  },
}
</script>

<style lang="scss" scoped>

#xueshengshitang {
    position: relative;;
    margin-left: 272px;
    padding-bottom: 100px;
    margin: 0 auto;
    z-index: 2;
    top: 40px;
    left:0px;
    width: 1117px;
    height: 988px;
    background-image: url(../../assets/img/Strategy/xueshengshitang/xsstBG1.png);
    background-repeat: no-repeat;
}
.allButtons {
    position: relative;
    top: 85px;
    width: 1070px;
    height: 200px;
}

.btn {
    margin-left: 150px;
    margin-top: 30px;
    float: left;
    font-size: 26px;
}
.redbtn1 {
    background-image: url(../../assets/img/Button/button1Hover.png);
    color: white;
}
.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateY(100px)
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
}


.road {
    float: left;
    width: 980px;
    position: relative;
    top: 33px;
    left: 180px;
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
        animation-delay: 2s;
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
        animation-delay: 4s;

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
        animation-delay: 6s;

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
        animation-delay: 8s;

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
        animation-delay: 10s;
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
        transform: rotate(70deg)
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
#v {
    position: relative;
}
.v {
    position: absolute;
    left: 25px;
}
.connect {
    width: 69px;
    height: 692px;
    background-image: url(../../assets/img/Strategy/connect.png);
    position: relative;
    left: 1253px;
    bottom: 173px;
    float: left;
}
</style>
