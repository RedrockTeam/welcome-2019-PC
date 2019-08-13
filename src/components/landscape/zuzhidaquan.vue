<template>
    <div id="zuzhidaquan">
        <div class="allbtns">
            <div @click="change('xiaojizuzhi')" class="btn76" :class="{'btn1' : now == 'xiaojizuzhi' ,'btn2' : !(now == 'xiaojizuzhi')}">
                <p>校级组织</p>
                <div  :class="{'hr1' : now == 'xiaojizuzhi' ,'hr2' : !(now == 'xiaojizuzhi')}"></div>
            </div>
            <div @click="change('hongyanwangxiao')" class="btn76" :class="{'btn1' : now == 'hongyanwangxiao' ,'btn2' : !(now == 'hongyanwangxiao')}">
                <p>红岩网校</p>
                <div  :class="{'hr1' : now == 'hongyanwangxiao' ,'hr2' : !(now == 'hongyanwangxiao')}"></div>
            </div>
            <div @click="change('xueshengshetuan')" class="btn76" :class="{'btn1' : now == 'xueshengshetuan' ,'btn2' : !(now == 'xueshengshetuan')}">
                <p>学生社团</p>
                <div  :class="{'hr1' : now == 'xueshengshetuan' ,'hr2' : !(now == 'xueshengshetuan')}"></div>
            </div>
        </div><div class="content">
            <transition mode="out-in">
                <component :is="now" class="myC"></component>
            </transition></div>
    </div>
</template>

<script>
import xiaojizuzhi from './zuzhidaquan/xiaojizuzhi'
import hongyanwangxiao from './zuzhidaquan/hongyanwangxiao'
import xueshengshetuan from './zuzhidaquan/xueshengshetuan'

export default {
  name: 'zuzhidaquan',
  components: {
    xiaojizuzhi,
    hongyanwangxiao,
    xueshengshetuan,
  },
  methods: {
    change(x) {
      this.now = x
    },
  },
  data() {
    return {
      now: 'xiaojizuzhi',
    }
  },
}
</script>

<style lang="scss">
#zuzhidaquan {
    width: 890px;
    height: 650px;
}
.allbtns {
    width: 870px;
    position: relative;
    top: 100px;
    z-index: 5;
    left: 25px;
    background-color: rgb(136, 166, 255); 
}
.btn76 {
    font-size: 20px;
    cursor: pointer;
    float: left;
    width: 278px;
    height: 45px;
    text-align: center;
    color: white;
    border: 2px solid rgb(22, 68, 197);
    border-left: 1px solid rgb(22, 68, 197);
    p {
        position: relative;
        top: 10px;
    }
}
.btn1 {
    background-color: rgb(67, 179, 255);
}
.btn2 {
    background-color: rgb(23, 75, 221);
}
.hr2 {
    width: 276px;
    height: 3px;
    background-color: white;
    position: relative;
    top:18px;
    z-index: 1;
    float: left;
}
.hr1 {
    width: 276px;
    height: 6px;
    background-color: rgb(21, 79, 241);
    position: relative;
    top:16px;
    z-index: 1;
    float: left;
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

.myC {
    position: relative;
    top: 120px;
}
</style>
