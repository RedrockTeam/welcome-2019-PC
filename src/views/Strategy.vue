<template>
    <div id="strategy">
        <div class="content">
            <div class="connect"></div>
            <component :is= Mycomponent></component>
        </div>
    </div>
</template>
<script>
import xinshengqingdan from '../components/strategy/xinshengqingdan'
import xueshengshitang from '../components/strategy/xueshengshitang'
import xueshengsushe from '../components/strategy/xueshengsushe'
import jiaotongluxian from '../components/strategy/jiaotongluxian'
import gongzhonghao from '../components/strategy/gzh'
import zhoubianshenghuo from '../components/strategy/zhoubianshenghuo'


export default {
  components: {
    xinshengqingdan,
    xueshengshitang,
    xueshengsushe,
    jiaotongluxian,
    gongzhonghao,
    zhoubianshenghuo,
  },
  data() {
    return {
      Mycomponent: 'xueshengshitang',
    }
  },
}
</script>
<style lang="scss" scoped>
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

    height: 900px;
    width: 1440px;
    background-color: rgb(176, 206, 255);
    margin: 0 auto;
    margin-top: 60px;
}
</style>
