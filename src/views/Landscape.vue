<template>
    <div id="strategy">

        <div class="content">
            <div id="v">
                <verticalBubble class="v"></verticalBubble>
            </div>
            <div class="connect"></div>
            <div class="bg">
                <div class="allbtns">
                    <button1 class="btn" @click.native="change('zuzhidaquan')" v-bind:class="{'redbtn1' : Mycomponent == 'zuzhidaquan'}">组织大全</button1>
                    <button1 class="btn" @click.native="change('xuanchuanshipin')" v-bind:class="{'redbtn1' : Mycomponent == 'xuanchuanshipin'}">宣传视频</button1>
                    <button1 class="btn" @click.native="change('youxiudaibiao')" v-bind:class="{'redbtn1' : Mycomponent == 'youxiudaibiao'}">优秀代表</button1>
                    <button1 class="btn" @click.native="change('youyuanfengguang')" v-bind:class="{'redbtn1' : Mycomponent == 'youyuanfengguang'}">邮苑风光</button1>
                </div>
                <div class="mid">
                    <transition mode="out-in">
                        <component :is= Mycomponent></component>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import youyuanfengguang from '../components/landscape/youyuanfengguang'
import xuanchuanshipin from '../components/landscape/xuanchuanshipin'
import youxiudaibiao from '../components/landscape/youxiudaibiao'
import zuzhidaquan from '../components/landscape/zuzhidaquan'
import button1 from '../components/Button1'
import verticalBubble from '../components/flash/verticalBubble'

export default {
  data() {
    return {
      Mycomponent: 'youyuanfengguang',
    }
  },
  components: {
    youyuanfengguang,
    button1,
    xuanchuanshipin,
    youxiudaibiao,
    zuzhidaquan,
    verticalBubble,
  },
  methods: {
    change(x) {
      this.Mycomponent = x
    },
  },
}
</script>

<style lang="scss" scoped>
.redbtn1 {
    background-image: url(../assets/img/Button/button1Hover.png);
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
.connect {
    position: relative;
    bottom: 176px;
    right: 117px;
    float: right;
    width: 69px;
    height: 692px;
    background-image: url(../assets/img/Strategy/connect.png);
}
.content {
    height: 1100px;
    width: 1440px;
    background-color: rgb(176, 206, 255);
    margin: 0 auto;
    margin-top: 60px;
}
.allbtns {
    position: relative;
    top: 112px;
    left: 124px;
    width: 900px;
    height: 122px;

    .btn {
        float: left;
        margin-left: 30px;
    }
}
.bg {
    position: relative;
    left: 138px;
    top: 44px;
    width: 1117px;
    height: 886px;
    background-image: url(../assets/img/Landscape/border.png) ;
    background-repeat: no-repeat
}
.mid {
    width: 890px;
    height: 650px;
    position: relative;
    top: 80px;
    left: 140px;
}

#v {
    position: relative;
}
.v {
    position: absolute;
    top:5px;
    z-index: 1;
}
</style>
