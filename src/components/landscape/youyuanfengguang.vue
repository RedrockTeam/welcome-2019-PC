<template>
    <div id="youyuanfengguang">
        <ul>
            <li>
                <div class="img1 img"></div>
                <span>落英缤纷</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img2 img"></div>
                <span>八十万</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img3 img"></div>
                <span>别有洞天</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img4 img"></div>
                <span>春华秋实</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img5 img"></div>
                <span>二教夕阳</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img6 img"></div>
                <span>高山流水</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img7 img"></div>
                <span>林荫大道</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img8 img"></div>
                <span>鸟瞰重邮</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img9 img"></div>
                <span>情人坡</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img10 img"></div>
                <span>数字图书馆</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img11 img"></div>
                <span>仰望八教</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img12 img"></div>
                <span>逸夫楼</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div>
            </li>
            <li>
                <div class="img13 img"></div>
                <span>雨红莲</span>
                <div class="bottom">
                    <img src="../../assets/img/Strategy/zhoubianshenghuo/icon.png"><p>重庆邮电大学</p>
                </div></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'youyuanfengguang',
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
#youyuanfengguang {
    width: 100%;
    height: 100%;
    background-color: rgb(176, 207, 255);
    position: absolute;
    top: 124px;
}
.bottom {
    width: 100%;
    height: 50px;
    position: relative;
    top: -20px;
}
ul {
    width: 900px;
    height: 650px;
    overflow-x: hidden;
    overflow-y: scroll;
    list-style: none;
    li {
        width: 247px;
        height: 303px;
        margin-left: 35px;
        margin-top: 26px;
        float: left;
        .img {
            width: 247px;
            height: 247px;
            background-color: rgb(176, 207, 255);
            border: 2px solid rgb(57, 125, 218);
        }
        span {
            font-size: 18px;
            font-family: '微软雅黑';
            color: rgb(2, 49, 169);
            position: relative;
            top:10px;
            z-index: 2;

        }
        p {
            position: relative;
            top: 36px;
            left: 20px;
            font-size: 12px;
            font-family: '宋体';
            color: rgb(76, 117, 234);

        }
        img {
            position: absolute;
            top: 35px;
        }
    }

}


.img1 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img1.jpg)
}
.img2 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img2.jpg)
}
.img3 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img3.jpg)
}
.img4 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img4.jpg)
}
.img5 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img5.jpg)
}
.img6 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img6.jpg)
}
.img7 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img7.jpg)
}
.img8 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img8.jpg)
}
.img9 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img9.jpg)
}
.img10 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img10.jpg)
}
.img11 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img11.jpg)
}
.img12 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img12.jpg)
}
.img13 {
    background-image: url(../../assets/img/Landscape/youyuanfengguang/img13.jpg)
}
</style>
