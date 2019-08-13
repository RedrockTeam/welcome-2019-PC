<template>
    <div id="meishi">
        <ul>
            <div class="nth"></div>
            <li>
                <div class="img1 img"></div>
                <span>贡茶</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门右手边五十米左右。</p>
                </div>
            </li>
            <li>
                <div class="img2 img"></div>
                <span>茶百道/书亦/渴望</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门过红绿灯右手边，第二个巷子（堕落街）梅菜扣肉饼前进入十几米处可见。</p>
                </div>
            </li>
            <li>
                <div class="img3 img"></div>
                <span>蜜雪冰城/古茗</span>
                <div class="bottom">
                  <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门对面。</p>
                </div>
            </li>
            <li>
                <div class="img4 img"></div>
                <span>大茶杯</span>
                <div class="bottom">
                  <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门过红绿灯左手边华莱士前面巷子处。</p>
                </div>
            </li>
            <li>
                <div class="img5 img"></div>
                <span>一只酸奶牛</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门过马路左手边十几米可见。</p>
                </div>
            </li>
            <li>
                <div class="img6 img"></div>
                <span>益禾堂</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门过红绿灯左手边。</p>
                </div>
            </li>
            <li>
                <div class="img7 img"></div>
                <span>柒露营自助烤肉</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门对面左手边直走可见一公共厕所，巷子处进入依次可见。</p>
                </div>
            </li>
            <li>
                <div class="img8 img"></div>
                <span>无届青年餐馆</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门对面左手边直走可见一公共厕所，巷子处进入依次可见。</p>
                </div>
            </li>
            <li>
                <div class="img9 img"></div>
                <span>毛哥老鸭汤</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>校门对面左手边直走依次可见，公交车站附近。</p>
                </div>
            </li>
            <li>
                <div class="img10 img"></div>
                <span>九村烤脑花</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>校门对面左手边直走依次可见，公交车站附近。</p>
                </div>
            </li>
            <li>
                <div class="img11 img"></div>
                <span>鹅掌老鸭汤</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>校门对面左手边直走依次可见，公交车站附近。</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'meishi',
  components: {

  },
}
</script>

<style lang="scss" scoped>
li {
    float: left;
    margin-left: 28px;
    margin-top: 25px;
    width: 263px;
    height: 272px;
    background-color: rgb(176, 207, 255);
    border: 3px solid rgb(57, 125, 218);
    .img {
        width: 228px;
        height: 134px;
        border: 2px solid rgb(2, 53, 199);
        margin-top: 30px;
        margin-left: 16px;
    }
    span {
        font-size: 18px;
        font-family: '微软雅黑';
        color: rgb(73, 105, 194);
        position: relative;
        top: 24px;
        left: 20px;
    }
    p {
        margin-top: 20px;
        font-size: 12px;
        font-family: '宋体';
        color: rgb(76, 117, 234);
        margin-left: 40px
    }
    img {
        position: absolute;
        left: 20px;


    }
}
.nth {
    width: 100%;
    height: 120px;
}
.img1 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img1.jpg)
}
.img2 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img2.jpg)
}
.img3 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img3.jpg)
}
.img4 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img4.jpg)
}
.img5 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img5.jpg)
}
.img6 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img6.jpg)
}
.img7 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img7.jpg)
}
.img8 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img8.jpg)
}
.img9 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img9.jpg)
}
.img10 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img10.jpg)
}
.img11 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/meishi/img11.jpg)
}

ul {
    list-style: none;
    width: 904px;
    height: 651px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    right:5px;
    top:-3px;
}
.bottom {
    width: 100%;
    height: 50px;
    position: relative;
    top: 20px
}
ul::-webkit-scrollbar { width: 17px;}
ul::-webkit-scrollbar-thumb {
    background:
        url(../../../assets/img/Scroll/scroll-thumb-top.png) no-repeat top,
        url(../../../assets/img/Scroll/scroll-thumb-bottom.png) no-repeat bottom,
        url(../../../assets/img/Scroll/scroll-thumb-content.png);
}
ul::-webkit-scrollbar-button:start {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowUp.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-button:end {
    height: 16px;
    background-image: url(../../../assets/img/Scroll/arrowDown.png);
    background-repeat: no-repeat;
}
ul::-webkit-scrollbar-track {
    background-image: url(../../../assets/img/Scroll/rail.png);
}
</style>
