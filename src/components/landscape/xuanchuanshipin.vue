<template>
    <div id="xuanchuanshipin">
        <ul>
            <li>
                <a href="https://v.qq.com/x/page/i0518koxz3b.html" target="blank">
                <div class="img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>重邮2017招生宣传片</span>
                </div>
                </a>
            </li>
            <li>
                <a href="https://v.qq.com/x/page/b0556ldsq1r.html" target="blank">
                <div class="img2 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>重邮2017级学生军训汇演</span>
                </div>
                </a>
            </li>
            <li>
                <a href="https://v.qq.com/x/page/o05597e7vw2.html" target="blank">
                <div class="img3 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2017年红岩网校招新视频</span>
                </div>
                </a>
            </li>
            <li>
                <div class="img4 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2016年红岩网校招新视频</span>
                </div>
            </li>
            <li>
                <div class="img5 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2015年红岩网校招新视频</span>
                </div>
            </li>
            <li>
                <a href="https://v.qq.com/x/page/p0157qsmcuj.html" target="blank">
                <div class="img6 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>乌瞰新重邮</span>
                </div>
                </a>
            </li>
            <li>
                <a href="https://v.qq.com/x/page/u061866c94o.html" target="blank">
                <div class="img7 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>重邮2018樱花季专题</span>
                </div>
                </a>
            </li>
            <li>
                <div class="img8 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>《春风十里》重邮版</span>
                </div>
            </li>
            <li>
                <a href="https://v.qq.com/x/page/p0161krhz05.html" target="blank">
                <div class="img9 img"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>航拍重邮第九届校运会</span>
                </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'xuanchuanshipin',
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
#xuanchuanshipin {
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
    width: 899px;
    height: 650px;
    overflow-x: hidden;
    overflow-y: scroll;
    list-style: none;
    li {
        width: 235px;
        height: 303px;
        margin-left: 45px;
        margin-top: 26px;
        float: left;
        .img {
            width: 235px;
            height: 235px;
            background-color: rgb(176, 207, 255);
            border: 2px solid rgb(57, 125, 218);
        }
        .grey {
            width: 231px;
            height: 41px;
            background-color: rgb(94, 108, 143);
            opacity: 0.5;
            position: relative;
            bottom: 43px;
            left: 2px;
        }
        .p {
            width: 231px;
            height: 41px;
            position: relative;
            bottom: 83px;
            left: 2px;
            text-align: center;
        }
        span {
            font-size: 18px;
            font-family: '微软雅黑';
            color: white;
            position: relative;
            top: 10px;
            z-index: 2;
            opacity: 1;
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

</style>
