<template>
<div class="all">
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
import button1 from "../Button1"
import { setInterval } from 'timers';
import mingliyuan from './xsssCarousel/mingliyuan'
import xingyeyuan from './xsssCarousel/xingyeyuan'
import ningjingyuan from './xsssCarousel/ningjingyuan'
import zhixingyuan from './xsssCarousel/zhixingyuan'
import verticalBubble from '../../components/flash/verticalBubble'
export default {
    name: "xueshengsushe",
    components: {
        button1,
        mingliyuan,
        xingyeyuan,
        ningjingyuan,
        zhixingyuan,
        verticalBubble
    },
    data() {
        return {
            now: "zhixingyuan",
            flag: [
                false,false,false,false,false,false
            ]
        }
    },
    methods: {  
        change (msg) {
            this.flag[0] = true
            this.now = msg
        },
    }
}
</script>

<style lang="scss" scoped>

#xueshengsushe {
    position: relative;
    z-index: 2;
    top: 40px;
    left:137px;
    width: 1117px;
    height: 713px;
    background-image: url(../../assets/img/Strategy/xueshengsushe/xsssBG.png);
}
.allButtons {
    position: relative;
    left: 100px;
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
</style>


