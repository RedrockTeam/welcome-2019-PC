<template>
  <div class="wrapper">
    <!-- QRcode -->
    <QRcode />
    <!-- content -->
    <Map />
    <student-raider />
    <cy-style />
    <military-special />
    <welcome-event />
    <about-us />
    <!-- rocket -->
    <Rocket />
    <!-- track -->
    <Track class="left-track" />
    <Track class="right-track" />
    <!-- pipline -->
    <div class="map-pipline"></div>
    <div class="map-raider-pipline-right"></div><div class="map-raider-pipline-left"></div>
    <div class="raider-style-pipline"></div>
    <div class="style-special-pipline-left"></div>
    <div class="style-special-pipline-right"></div>
    <div class="special-event-pipline"></div>
    <div class="event-pipline"></div>
  </div>
</template>

<script>
import Map from '@/components/Map/Map.vue'
import StudentRaider from '@/components/StudentRaider.vue'
import CyStyle from '@/components/CyStyle.vue'
import MilitarySpecial from '@/components/MilitarySpecial.vue'
import WelcomeEvent from '@/components/WelcomeEvent.vue'
import AboutUs from '@/components/AboutUs.vue'
import Rocket from '@/components/layout/Rocket.vue'
import QRcode from '@/components/layout/QRcode.vue'
import Track from '@/components/layout/Track.vue'

export default {
  name: 'home',
  components: {
    Map,
    StudentRaider,
    CyStyle,
    MilitarySpecial,
    WelcomeEvent,
    AboutUs,
    Rocket,
    QRcode,
    Track,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1440px;
  margin: 0 auto;
  position: relative;
  .left-track {
    height: 4585px;
    position: absolute;
    top: -406px;
    left: 0;
    transform: rotateY(180deg);
  }
  .right-track {
    height: 4585px;
    position: absolute;
    top: -406px;
    right: 0;
  }
  .map-pipline {
    position: absolute;
    top: -166px;
    right: 118px;
    float: right;
    width: 69px;
    height: 692px;
    background-image: url(../assets/img/Strategy/connect.png);
  }
  .map-raider-pipline-right {
    float: right;
    position: absolute;
    top: 744px;
    right: 288px;
    background-image: url(../assets/img/Connect/img6.png);
    width: 79px;
    height: 196px;
  }
  .map-raider-pipline-left {
    float: left;
    position: absolute;
    top: 744px;
    left: 318px;
    background-image: url(../assets/img/Connect/img7.png);
    background-repeat: no-repeat;
    width: 95px;
    height: 210px;
  }
  .raider-style-pipline {
    position: absolute;
    top: 1223px;
    left: 98px;
    background-image: url(../assets/img/Connect/img1.png);
    width: 89px;
    height: 468px;
  }
  .style-special-pipline-right {
    position: absolute;
    float: right;
    top: 1840px;
    right: 118px;
    background-image: url(../assets/img/Connect/img2.png);
    width: 69px;
    height: 623px;
  }
  .style-special-pipline-left {
    margin: 0 auto;
    position: absolute;
    top: 2055px;
    left: 319px;
    background-image: url(../assets/img/Connect/img3.png);
    width: 79px;
    height: 198px;
  }
  .special-event-pipline {
    float: right;
    position: absolute;
    top: 2692px;
    right: 288px;
    background-image: url(../assets/img/Connect/img4.png);
    width: 79px;
    height: 198px;
  }
  .event-pipline {
    float: right;
    position: absolute;
    top: 3409px;
    right: 288px;
    background-image: url(../assets/img/Connect/img4.png);
    width: 79px;
    height: 198px;
  }
}
</style>
