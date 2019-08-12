<template>
    <div id="yinhang">
        <ul>
            <div class="nth"></div>
            <li>
                <div class="img1 img"></div>
                <span>农业银行</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门出门右转，新世纪超市旁边</p>
                </div>
            </li>
            <li>
                <div class="img2 img"></div>
                <span>中国邮政储蓄银行</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门右转，绝味鸭脖旁边</p>
                </div>
            </li>
            <li>
                <div class="img3 img"></div>
                <span>中国工商银行自助服务点</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>新校门出门，左转直走，老校门出门，右转直走。</p>
                </div>
            </li>
            <li>
                <div class="img4 img"></div>
                <span>重庆农村商业银行</span>
                <div class="bottom">
                    <img src="../../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>老校门出门，过马路，右转。</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'yinhang',
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
.img1 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/yinhang/img1.jpg)
}
.img2 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/yinhang/img2.jpg)
}
.img3 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/yinhang/img3.jpg)
}
.img4 {
    background-image: url(../../../assets/img/Strategy/zhoubianshenghuo/yinhang/img4.jpg)
}


ul {
    list-style: none;
    width: 905px;
    height: 651px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    right:5px;
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
.nth {
    width: 100%;
    height:120px;
}
</style>
