<template>
    <div id="zhoubianshenghuo">
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
import yinhang from './zbsh/yinhang'
import kuaidi from './zbsh/kuaidi'
import chaoshi from './zbsh/chaoshi'
import meishi from './zbsh/meishi'
import verticalBubble from '../flash/verticalBubble'
import button1 from '../Button1'

export default {
  name: 'zhoubianshenghuo',
  components: {
    verticalBubble,
    button1,
    yinhang,
    kuaidi,
    chaoshi,
    meishi,
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
    height: 740px;
    background-image: url(../../assets/img/Strategy/zhoubianshenghuo/zbshBG.png)
}
.v {
    position: relative;
    left: -135px;
    top: -40px
}
.content {
    width: 900px;
    height: 650px;
    position: relative;
    left: 140px;
}
.allbtns {
    width: 900px;
    height: 130px;
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


</style>
