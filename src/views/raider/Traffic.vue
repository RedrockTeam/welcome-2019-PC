<template>
  <Frame styles="lantern">
    <div class="title-wrapper">
    <div class="title">
      <div class="dir">出发地</div>
      <div class="time">预计时间</div>
      <div class="press">预计价格</div>
      <div class="line">乘车路线</div>
    </div></div>
    <scroll-bar class="scroll-bar">
      <div class="contents">
        <ul>
          <li>
              <p class="pp1">重庆江北机场：(距离学校约40公里)</p>
              <p class="pp2">30分钟</p>
              <p class="pp3">70元</p>
              <p class="pp4">
                可乘机场大巴至上清寺后转乘108路公交车至南坪，再转乘346或347路公交车到学校；或乘轻轨三号线到南坪，再转乘346或347路公交车到学校
              </p>
          </li>
          <li>
              <p class="pp1">龙头寺火车站、重庆北站（距离学校约20公里）</p>
              <p class="pp2">26分钟</p>
              <p class="pp3">40元</p>
              <p class="pp4">
                乘323路或168路公交车至南坪，转乘346或347路公交车至学校：或乘轻轨三号线到南坪，再转乘346或347路公交车到学校</p>
          </li>
          <li>
              <p class="pp1">菜园坝火车站、汽车站（距离学校约12公里）</p>
              <p class="pp2">26分钟</p>
              <p class="pp3">25元</p>
              <p class="pp4">可在菜园坝广场乘347路公交车至学校</p>
          </li>
          <li>
              <p class="pp1">重庆西站（距离学校约25公里）</p>
              <p class="pp2">48分钟</p>
              <p class="pp3">70元</p>
              <p class="pp4">
                可乘213路公交车到天星桥，转乘819路公交车至会展中心，再转乘346路公交车到学校；可乘426路公交车到南坪红星美凯龙，
                再转乘347路公交车到学校
              </p>
          </li>
          <li>
              <p class="pp1">朝天门码头（距离学校约9公里）</p>
              <p class="pp2">34分钟</p>
              <p class="pp3">20元</p>
              <p class="pp4">可乘车至南坪后转乘346或347路公交车至学校</p>
          </li>
          <li>
              <p class="pp1">崇文路2号（距离学校0公里）</p>
              <p class="pp2">1分钟</p>
              <p class="pp3">1元</p>
              <p class="pp4">可乘坐校内观光车到教学楼、宿舍楼等；每人需自备一元现金车票</p>
          </li>
      </ul>
      </div>
    </scroll-bar>
  </Frame>
</template>

<script>
import Frame from '@/components/base/Frame.vue'
import ScrollBar from '@/components/base/ScrollBar.vue'

export default {
  components: {
    Frame,
    ScrollBar,
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';

.scroll-bar {
  width: 100%;
  height: 100%;
}
.title-wrapper {
  width: 870px;
  height: 44+18px;
  position: absolute;
  top: 0px;
  left: 16px;
  background: #87a6ff;
  z-index: 1;
}
.title {
  width: 870px;
  height: 44px;
  background: #b0cfff;
  z-index: 1;
  border: 3px solid #397dda;
  margin-top: 18px;
  display: flex;
  font-size: 18px;
  align-items: center;
  color: #0a3cca;
  .dir {
    margin-left: 30px;
  }
  .time, .press {
    margin-left: 80px;
  }
  .line {
    width: 414px;
    text-align: center;
    margin-left: 50px;
  }
}
.contents {
  @include frameContentStyle;
  width: 870px;
  margin-top: 50px;
  font-size: 14px;
  padding-bottom: 0;
  li {
    border: 3px solid #397dda;
    margin: 15px 0;
    display: flex;
    height: 81px;
    background: #b0cfff;
    align-items: center;
    p {
      padding-left: 15px;
      overflow: auto;
      height: 66px;
    }
    .pp1 {
      font-size: 16px;
      font-family: '微软雅黑';
      color: rgb(58, 96, 207);
      width: 140px;
    }
    .pp2 {
        font-size: 16px;
        font-family: '微软雅黑';
        color: rgb(76, 117, 234);
        width: 100px;
        margin-left: 26px;
        display: flex;
        align-items: center;
    }
    .pp3 {
        font-size: 14px;
        color: rgb(235, 92, 107);
        width: 100px;
        margin-left: 58px;
        display: flex;
        align-items: center;
    }
    .pp4 {
        font-size: 14px;
        font-family: '微软雅黑';
        color: rgb(76, 117, 234);
        width: 434px;
        margin-left: 26px;
        padding-right: 15px;
    }
  }
}
</style>
