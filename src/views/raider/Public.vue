<template>
  <Frame styles="lantern">
    <scroll-bar class="scroll-bar">
      <div class="contents">
                <li class="content">
                    <div class="img1"></div>
                    <span>重庆邮电大学</span>
                    <p>负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。</p>
                </li>
                <li class="content">
                    <div class="img2"></div>
                    <span>重邮小帮手</span>
                    <p>重邮影响力最大、关注量最高的新媒体平台。先后获得“重庆十大微信公众号”、腾讯校园应用“最佳人气产品”等殊荣。</p>
                </li>
                <li class="content">
                    <div class="img3"></div>
                    <span>重邮青年</span>
                    <p>致力于为广大重邮学子提供最精彩的校园动态一一这里有最引人注目的新闻资讯|这里 有最方便实用的知识信息、逗趣感动的青春互动。</p>
                </li>
                <li class="content">
                    <div class="img4"></div>
                    <span>重邮微校</span>
                    <p>重庆邮电大学党委学生工作处运营，功能定位:学生教育管理，评奖评优，心理健康教育，学生党员教育，职业生涯规划，学业辅导，学生资助等推送。</p>
                </li>
                <li class="content">
                    <div class="img5"></div>
                    <span>重庆邮电大学招生办公室</span>
                    <p>提供重庆邮电大学招生计划、录取分数线、招生简章、新生班级、宿舍分配情况、新生缴费情况的查询和咨询服务。</p>
                </li>
                <li class="content">
                    <div class="img6"></div>
                    <span>重邮小卫士</span>
                    <p>重庆邮电大学保卫处运营，集安全教育、安全服务、信息通报、应急处置等功能为一体旨在传播安全知识，增强师生安全防范意识，服务于校园安全稳定工作。</p>
                </li>
                <li class="content">
                    <div class="img7"></div>
                    <span>学生会</span>
                    <p>认真，诚恳，有态度。尽我们所能，为重邮学生服务。</p>
                </li>
                <li class="content">
                    <div class="img8"></div>
                    <span>重庆邮电大学就业中心</span>
                    <p>重庆邮电大学就业中心官方微信，实时发布校内招聘信息，就业动态等相关信息。</p>
                </li>
                <li class="content">
                    <div class="img9"></div>
                    <span>重庆邮电大学宿管会</span>
                    <p>面向全校学生，提供最优质的服务和最新的校园动态，及时为同学推送有关宿舍的信息以及通知，为同学解决有关宿舍方面的问题，展现宿舍风采。</p>
                </li>
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
.contents {
  @include frameContentStyle;
  width: 860px;
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
    list-style: none;
    padding-top: 18px;
  padding-left: 11px;
  padding-bottom: 6px;
  .content {
    width: 262px;
    height: 369px;
    border: 3px solid #397dda;
    background: #b0cfff;
    font-family: '微软雅黑';
    span {
      display: block;
      text-align: center;
      width: 100%;
      margin-top: -20px;
      color: #0231a9;
      font-size: 18px;
    }
    p {
      width: 80%;
      color: #3a6dea;
      margin: 0 auto;
      font-size: 14px;
    }
.img1 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img1.jpg);
  background-size: 100% 100%;
}
.img2 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img2.jpg);
  background-size: 100% 100%;
}
.img3 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img3.jpg);
  background-size: 100% 100%;
}
.img4 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img4.jpg);
  background-size: 100% 100%;
}
.img5 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img5.jpg);
  background-size: 100% 100%;
}
.img6 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img6.jpg);
  background-size: 100% 100%;
}
.img7 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img7.jpg);
  background-size: 100% 100%;
}
.img8 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img8.jpg);
  background-size: 100% 100%;
}
.img9 {
  margin: 27px;
  border: 2px solid #0235c7;
  width: 204px;
  height: 204px;
  margin-top: 20px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/img9.jpg);
  background-size: 100% 100%;
}
  }
  .content:nth-child(2) {
    margin-left: 28px;
  }
  .content:nth-child(3n) {
    margin-left: 28px;
  }
  .content:nth-child(2n + 3) {
    margin-left: 28px;
  }
  .content:nth-child(7) {
    margin-left: 0;
  }
  .content:nth-child(8) {
    margin-left: 28px;
  }
  .content {
    margin-bottom: 28px;
  }
}
</style>
