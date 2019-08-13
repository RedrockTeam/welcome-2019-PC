<template>
    <div id="kuaidi">
        <ul>
            <div class="nth"></div>
            <li>
                <div class="img1 img"></div>
                <span>京东&顺丰&圆通</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于樱花园6栋，二教与马克思主义学院下面居民区石碑处</p>
                </div>
            </li>
            <li>
                <div class="img2 img"></div>
                <span>韵达&申通</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于15栋楼下靠近太极操场一侧</p>
                </div>
            </li>
            <li>
                <div class="img3 img"></div>
                <span>中通快递</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于学生公寓知行苑5栋背后超市旁边</p>
                </div>
            </li>
            <li>
                <div class="img4 img"></div>
                <span>邮政包裹</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于邮政银行外面</p>
                </div>
            </li>
            <li>
                <div class="img5 img"></div>
                <span>邮政自提柜&EMS快递</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于香樟园四号，八十万厕所旁边</p>
                </div>
            </li>
            <li>
                <div class="img6 img"></div>
                <span>百世快递</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于阳光图文后面</p>
                </div>
            </li>
            <li>
                <div class="img7 img"></div>
                <span>菜鸟驿站&丰巢</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>位于静园小区里面，老校门对面左手边大茶杯奶茶店旁斜坡上行右边巷子处</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'kuaidi',
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
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img1.jpg)
}
.img2 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img2.jpg)
}
.img3 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img3.jpg)
}
.img4 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img4.jpg)
}
.img5 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img5.jpg)
}
.img6 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img6.jpg)
}
.img7 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/kuaidi/img7.jpg)
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
