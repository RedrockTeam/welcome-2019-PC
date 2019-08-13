<template>
<div class="all">
  <div class="connect"></div>
  <BtnAnimation class="btnflash"></BtnAnimation>
    <div id="v">
        <verticalBubble class="v"></verticalBubble>
    </div>
    <div id="xueshengsushe">
        <div class="allButtons">
            <button1 class="btn" @click.native="change('mingliyuan')" v-bind:class="{'redbtn1' : now == 'mingliyuan'}">明理苑</button1>
            <button1 class="btn" @click.native="change('xingyeyuan') " v-bind:class="{'redbtn1' : now == 'xingyeyuan'}">兴业苑</button1>
            <button1 class="btn" @click.native="change('ningjingyuan')" v-bind:class="{'redbtn1' : now == 'ningjingyuan'}">宁静苑</button1>
            <button1 class="btn" @click.native="change('zhixingyuan')" v-bind:class="{'redbtn1' : now == 'zhixingyuan'}">知行苑</button1>
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
import mingliyuan from '../../components/strategy/xsssCarousel/mingliyuan'
import xingyeyuan from '../../components/strategy/xsssCarousel/xingyeyuan'
import ningjingyuan from '../../components/strategy/xsssCarousel/ningjingyuan'
import zhixingyuan from '../../components/strategy/xsssCarousel/zhixingyuan'
import verticalBubble from '../../components/flash/verticalBubble'
import BtnAnimation from '../../components/base/BtnAnimation'

export default {
  name: 'xueshengsushe',
  components: {
    button1,
    mingliyuan,
    xingyeyuan,
    ningjingyuan,
    zhixingyuan,
    verticalBubble,
    BtnAnimation
  },
  data() {
    return {
      now: 'zhixingyuan',
      flag: [
        false, false, false, false, false, false,
      ],
    }
  },
  methods: {
    change(msg) {
      this.flag[0] = true
      this.now = msg
    },
  },
}
</script>

<style lang="scss" scoped>

#xueshengsushe {
    position: relative;
    z-index: 2;
    top: 40px;
    left:137px;
    width: 1117px;
    height: 863px;
    background-image: url(../../assets/img/Strategy/xueshengsushe/xsssBG.png);
    background-repeat: no-repeat;
}
.allButtons {
    position: relative;
    left: 35px;
    top: 85px;
    width: 1070px;
    height: 200px;
}

.btn {
    margin-left: 40px;
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
#v {
    position: relative;
}
.v {
    position: absolute;

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
.btnflash{
    position: relative;
    top:92px;
    left: 344px;
    z-index: 5;
}
</style>
