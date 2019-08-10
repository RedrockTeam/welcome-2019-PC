<template>
    <div id="gzh">
        <horizontalBubble></horizontalBubble>
        <verticalBubble></verticalBubble>
        <div class="bg">
            <ul>
                <li>
                    <div class="img1"></div>
                    <span>重庆邮电大学</span>
                    <p>负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。</p>
                </li>
                <li>
                    <div class="img2"></div>
                    <span>重邮小帮手</span>
                    <p>重邮影响力最大、关注量最高的新媒体平台，“重庆十大微信公众号”。先后获得“首届全国高校优秀网络栏目提名奖”、腾讯校园应用“最佳人气产品”等殊荣。</p>
                </li>
                <li>
                    <div class="img3"></div>
                    <span>重邮青年</span>
                    <p>致力于为广大重邮学子提供最精彩的校园动态一一这里有最引人注目的新闻资讯|这里 有最方便实用的知识信息、逗趣感动的青春互动。</p>
                </li>
                <li>
                    <div class="img4"></div>
                    <span>重邮微校</span>
                    <p>重庆邮电大学党委学生工作处运营，功能定位:学生教育管理，评奖评优，心理健康教育，学生党员教育，职业生涯规划，学业辅导，学生资助等推送。</p>
                </li>
                <li>
                    <div class="img5"></div>
                    <span>重庆邮电大学招生办公室</span>
                    <p>提供重庆邮电大学招生计划、录取分数线、招生简章、新生班级、宿舍分配情况、新生缴费情况的查询和咨询服务。</p>
                </li>
                <li>
                    <div class="img6"></div>
                    <span>重邮小卫士</span>
                    <p>重庆邮电大学保卫处运营，集安全教育、安全服务、信息通报、应急处置等功能为一体旨在传播安全知识，增强师生安全防范意识，服务于校园安全稳定工作。</p>
                </li>
                <li>
                    <div class="img7"></div>
                    <span>学生会</span>
                    <p>认真，诚恳，有态度。尽我们所能，为重邮学生服务。</p>
                </li>
                <li>
                    <div class="img8"></div>
                    <span>重庆邮电大学就业中心</span>
                    <p>重庆邮电大学就业中心官方微信，实时发布校内招聘信息，就业动态等相关信息。</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import horizontalBubble from '../flash/horizontalBubble'
import verticalBubble from '../flash/verticalBubble'

export default {
  name: 'gongzhonghao',
  components: {
    horizontalBubble,
    verticalBubble,
  },
}
</script>

<style lang="scss" scoped>
ul::-webkit-scrollbar { width: 17px;}
ul::-webkit-scrollbar-thumb {
    background:
        url(../../assets/img/Scroll/scroll-thumb-top.png) no-repeat top,
        url(../../assets/img/Scroll/scroll-thumb-bottom.png) no-repeat bottom,
        url(../../assets/img/Scroll/scroll-thumb-content.png);
}
ul::-webkit-scrollbar-button:start {
    height: 16px;
    background-image: url(../../assets/img/Scroll/arrowUp.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-button:end {
    height: 16px;
    background-image: url(../../assets/img/Scroll/arrowDown.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-track {
    background-image: url(../../assets/img/Scroll/rail.png);
}
.bg {
    position: relative;
    top: 41px;
    width: 1118px;
    height: 740px;
    left: 136px;
    background-image: url(../../assets/img/Strategy/gongzhonghao/gzhBG.png)
}
ul {
    overflow-x: hidden;
    overflow-y: scroll;
    list-style: none;
    position: relative;
    left: 140px;
    width: 900px;
    height: 649px;
    top: 77px;
    li {
        margin-left: 25px;
        margin-top: 26px;
        float: left;
        width: 255px;
        height: 350px;
        background-color: rgb(176, 207, 255);
        border: 3px solid rgb(57, 125, 218);
        text-align: center;
        overflow: hidden;
        div {
            width: 201px;
            height: 201px;
            border: 2px solid rgb(2, 53, 199);
            margin-top: 25px;
            margin-left: 22px;
        }
        span {
            font-size: 18px;
            font-family: '微软雅黑';
            color: rgb(73, 105, 194);
            position: relative;
            top: 24px;
        }
        p {
            position: relative;
            top: 39px;
            font-size: 12px;
            font-family: '宋体';
            color: rgb(76, 117, 234);
        }
    }
}
.img1 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img1.jpg)
}
.img2 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img2.jpg)
}
.img3 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img3.jpg)
}
.img4 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img4.jpg)
}
.img5 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img5.jpg)
}
.img6 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img6.jpg)
}
.img7 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img7.jpg)
}
.img8 {
    background-image: url(../../assets/img/Strategy/gongzhonghao/img8.jpg)
}
</style>
