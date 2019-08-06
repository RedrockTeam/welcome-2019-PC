<template>
  <div class="wrapper">
    <Map />
    <student-raider />
    <cy-style />
    <military-special />
    <welcome-event />
    <about-us />
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

export default {
  name: 'home',
  components: {
    Map,
    StudentRaider,
    CyStyle,
    MilitarySpecial,
    WelcomeEvent,
    AboutUs,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #b0ceff;
  .map-pipline {
    position: absolute;
    top: 529px;
    right: 118px;
    float: right;
    width: 69px;
    height: 692px;
    background-image: url(../assets/img/Strategy/connect.png);
  }
  .map-raider-pipline-right {
    float: right;
    position: absolute;
    top: 1439px;
    right: 288px;
    background-image: url(../assets/img/Connect/img6.png);
    width: 79px;
    height: 196px;
  }
  .map-raider-pipline-left {
    float: left;
    position: absolute;
    top: 1439px;
    left: 310px;
    background-image: url(../assets/img/Connect/img7.png);
    width: 95px;
    height: 210px;
  }
  .raider-style-pipline {
    position: absolute;
    top: 1917px;
    left: 98px;
    background-image: url(../assets/img/Connect/img1.png);
    width: 89px;
    height: 468px;
  }
  .style-special-pipline-right {
    position: absolute;
    float: right;
    top: 2534px;
    right: 118px;
    background-image: url(../assets/img/Connect/img2.png);
    width: 69px;
    height: 623px;
  }
  .style-special-pipline-left {
    margin: 0 auto;
    position: absolute;
    top: 2750px;
    left: 319px;
    background-image: url(../assets/img/Connect/img3.png);
    width: 79px;
    height: 198px;
  }
  .special-event-pipline {
    float: right;
    position: absolute;
    top: 3387px;
    right: 288px;
    background-image: url(../assets/img/Connect/img4.png);
    width: 79px;
    height: 198px;
  }
  .event-pipline {
    float: right;
    position: absolute;
    top: 4104px;
    right: 288px;
    background-image: url(../assets/img/Connect/img4.png);
    width: 79px;
    height: 198px;
  }
}
</style>
