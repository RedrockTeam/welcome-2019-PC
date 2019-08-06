<template>
  <div class="home">
    <rocket></rocket>
    <guidao></guidao>
    <QRcode></QRcode>
    <div style="height:130px;width:1440px"></div>
    <div class="img8"></div>
    <Map class="map" style="margin-bottom:194px"></Map>
    <div class="img6"></div><div class="img7"></div>
    <youzigonglue style="margin-bottom:-400px"></youzigonglue>
    <div class="img1"></div>
    <chongyoufengcai style="margin-bottom:-115px"></chongyoufengcai>
    <div class="img3"></div>
    <div class="img2"></div>
    <junxunteji style="margin-bottom:79px; margin-left:-40px"></junxunteji>
    <div class="img4"></div>
    <yingxinhuodong style="margin-bottom:79px"></yingxinhuodong>
    <div class="img5"></div>
    <guanyuwomen style="margin-bottom:137px"></guanyuwomen>
  </div>
</template>

<script>
import Button from '../components/Button'
import youzigonglue from '../components/youzigonglue/youzigonglue'
import junxunteji from '../components/junxunteji/junxunteji'
import chongyoufengcai from '../components/chongyoufengcai/chongyoufengcai'
import yingxinhuodong from '../components/yingxinhuodong/yingxinhuodong'
import guanyuwomen from '../components/guanyuwomen/guanyuwomen'
import Myfooter from '../components/footer/footer'
import QRcode from '../components/QRcode'
import rocket from '../components/rocket'
import guidao from '../components/guidao'
import Map from '../components/Map/Map'


export default {
  name: 'home',
  components: {
    button1: Button,
    junxunteji,
    chongyoufengcai,
    yingxinhuodong,
    guanyuwomen,
    Myfooter,
    QRcode,
    rocket,
    youzigonglue,
    Map,
    guidao,
  },
};
</script>


<style lang="scss" scoped>
.img1 {
  position: relative;
  top: 275px;
  left: 92px;
  background-image: url(../assets/img/Connect/img1.png);
  width: 89px;
  height: 468px;
}
.img2 {
  position: relative;
  float: right;
  bottom: 290px;
  right: 125px;
  background-image: url(../assets/img/Connect/img2.png);
  width: 69px;
  height: 623px;
}
.img3 {
  margin: 0 auto;
  position: relative;
  right: 370px;
  top: 126px;
  background-image: url(../assets/img/Connect/img3.png);
  width: 79px;
  height: 198px;
}
.img4 {
  float: right;
  position: relative;
  bottom: 70px;
  right: 288px;
  background-image: url(../assets/img/Connect/img4.png);
  width: 79px;
  height: 198px;
}
.img5 {
  float: right;
  position: relative;
  bottom: 70px;
  right: 288px;
  background-image: url(../assets/img/Connect/img4.png);
  width: 79px;
  height: 198px;
}

.img8 {
  position: relative;
  bottom: 246px;
  right: 118px;
  float: right;
  width: 69px;
  height: 692px;
  background-image: url(../assets/img/Strategy/connect.png);
}
.img7 {
  float: left;
  position: relative;
  bottom: 81px;
  left: 311px;
  background-image: url(../assets/img/Connect/img7.png);
  width: 95px;
  height: 210px;
}
.img6 {
  float: right;
  position: relative;
  bottom: 81px;
  right: 288px;
  background-image: url(../assets/img/Connect/img6.png);
  width: 79px;
  height: 196px;
}
.home {
  width: 1440px;
  background-color: rgb(176, 206, 255);
  margin: 0 auto;
  max-width: 1440px;
  min-width: 1440px;
}
.map {
  margin: 0 auto;
}
</style>
