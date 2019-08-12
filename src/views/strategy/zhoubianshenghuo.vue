<template>
    <div id="zhoubianshenghuo">
        <div class="connect"></div>
        <BtnAnimation class="btnflash"></BtnAnimation>
        <verticalBubble class="v"></verticalBubble>
        <div class="content">
            <div class="allbtns">
                <button1 class="btn" @click.native="change('yinhang')" v-bind:class="{'redbtn1' : now == 'yinhang'}">银行</button1>
                <button1 class="btn" @click.native="change('kuaidi')" v-bind:class="{'redbtn1' : now == 'kuaidi'}">快递</button1>
                <button1 class="btn" @click.native="change('chaoshi')" v-bind:class="{'redbtn1' : now == 'chaoshi'}">超市</button1>
                <button1 class="btn" @click.native="change('meishi')" v-bind:class="{'redbtn1' : now == 'meishi'}">美食</button1>
            </div>
            <transition mode="out-in">
                <component :is="now"></component>
            </transition>
        </div>
    </div>
</template>

<script>
import yinhang from '../../components/strategy/zbsh/yinhang'
import kuaidi from '../../components/strategy/zbsh/kuaidi'
import chaoshi from '../../components/strategy/zbsh/chaoshi'
import meishi from '../../components/strategy/zbsh/meishi'
import verticalBubble from '../../components/flash/verticalBubble'
import button1 from '../../components/Button1'
import BtnAnimation from '../../components/base/BtnAnimation'

export default {
  name: 'zhoubianshenghuo',
  components: {
    verticalBubble,
    button1,
    yinhang,
    kuaidi,
    chaoshi,
    meishi,
    BtnAnimation,
  },
  data() {
    return {
      now: 'yinhang',
    }
  },
  methods: {
    change(x) {
      this.now = x
    },
  },
}
</script>

<style lang="scss" scoped>
.redbtn1 {
    background-image: url(../../assets/img/Button/button1Hover.png);
    color: white;
}
#zhoubianshenghuo {
    position: relative;
    top: 41px;
    left: 136px;
    width: 1117px;
    height: 890px;
    background-image: url(../../assets/img/Strategy/zhoubianshenghuo/zbshBG.png);
    background-repeat: no-repeat;
}
.v {
    position: relative;
    left: -135px;
    top: -730px
}
.content {
    width: 900px;
    height: 650px;
    position: absolute;
    left: 140px;
}
.allbtns {
    width: 880px;
    height: 130px;
    position: absolute;
    top: 0px;
    left: 0px;;
    background-color: rgb(136, 166, 255);
    z-index: 2;
    .btn {
        float: left;
        margin-left: 30px;
        margin-top: 38px;
        font-size: 26px;
    }
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

.connect {
    width: 69px;
    height: 692px;
    background-image: url(../../assets/img/Strategy/connect.png);
    position: relative;
    left: 1117px;
    bottom: 216px;
    float: left;
}
.btnflash{
    position: relative;
    top:48px;
    left: 202px;
    z-index: 5;
}
</style>
