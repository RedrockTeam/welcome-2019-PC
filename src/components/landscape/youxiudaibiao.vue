<template>
    <div id="youxiudaibiao">
        <div class="allbtns">
            <div @click="change('jiaoshidaibiao')" class="btn" :class="{'btn2' : now == 'jiaoshidaibiao' ,'btn1' : !(now == 'jiaoshidaibiao')}">
                <p>教师代表</p>
                <div  :class="{'hr1' : now == 'jiaoshidaibiao' ,'hr2' : !(now == 'jiaoshidaibiao')}"></div>
            </div>
            <div @click="change('xueshengdaibiao')" class="btn" :class="{'btn1' : now == 'jiaoshidaibiao' ,'btn2' : !(now == 'jiaoshidaibiao')}">
                <p>学生代表</p>
                <div  :class="{'hr1' : now == 'xueshengdaibiao' ,'hr2' : !(now == 'xueshengdaibiao')}"></div>
            </div>
        </div>
        <div class="content">

                <component :is="now"></component>

        </div>
    </div>
</template>


<script>
import xueshengdaibiao from './youxiudaibiao/xuesheng'
import jiaoshidaibiao from './youxiudaibiao/jiaoshi'

export default {
  name: 'youxiudaibiao',
  data() {
    return {
      now: 'jiaoshidaibiao',
    }
  },
  methods: {
    change(x) {
      this.now = x
    },
  },
  components: {
    xueshengdaibiao,
    jiaoshidaibiao,
  },
}
</script>

<style lang="scss" scoped>
#youxiudaibiao {
    width: 890px;
    height: 650px;
}
.btn {
    font-size: 18px;
    cursor: pointer;
    float: left;
    width: 445px;
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
.hr1 {
    width: 442px;
    height: 3px;
    background-color: white;
    position: relative;
    top:18px;
    z-index: 2;
    float: left;
}
.hr2 {
    width: 442px;
    height: 6px;
    background-color: rgb(21, 79, 241);
    position: relative;
    top:15px;
    z-index: 2;
    float: left;
}
.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateY(0px)
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
}
</style>
