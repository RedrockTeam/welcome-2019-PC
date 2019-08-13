<template>
    <div id="xuanchuanshipin">
        <div class="greyall" v-if="show == 1"></div>
        <div class="video" v-if="show == 1">
            <button class="off" @click="off()"><p>×</p></button>
            <video :src="videos[mark]" controls="controls" id="video" autoplay="autoplay" preload="preload">
                Loading~~~
            </video>
        </div>
        <ul>
            <li>
                <div class="img1 img"  @click="showIt(0)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span >重邮2017招生宣传片</span>
                </div>
            </li>
            <li>
                <div class="img2 img" @click="showIt(1)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>重邮2017级学生军训汇演</span>
                </div>
            </li>
            <li>
                <div class="img3 img" @click="showIt(2)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2017年红岩网校招新视频</span>
                </div>
            </li>
            <li>
                <div class="img4 img" @click="showIt(3)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2015年红岩网校招新视频</span>
                </div>
            </li>
            <li>
                <div class="img5 img" @click="showIt(4)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>2016年红岩网校招新视频</span>
                </div>
            </li>
            <li>
                <div class="img6 img" @click="showIt(5)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>乌瞰新重邮</span>
                </div>
            </li>
            <li>
                <div class="img7 img" @click="showIt(6)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>重邮2018樱花季专题</span>
                </div>
            </li>
            <li>
                <div class="img8 img" @click="showIt(7)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>《春风十里》重邮版</span>
                </div>
            </li>
            <li>
                <div class="img9 img" @click="showIt(8)"></div>
                <div class="grey"></div>
                <div class="p">
                    <span>航拍重邮第九届校运会</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'xuanchuanshipin',
  data() {
      return {
        show : 0,
        mark : 0,
        videos: [
            require('../../assets/video/xuanchuan/1.mp4'),
            require('../../assets/video/xuanchuan/2.mp4'),
            require('../../assets/video/xuanchuan/3.mp4'),
            require('../../assets/video/xuanchuan/4.mp4'),
            require('../../assets/video/xuanchuan/5.mp4'),
            require('../../assets/video/xuanchuan/6.mp4'),
            require('../../assets/video/xuanchuan/7.mp4'),
            require('../../assets/video/xuanchuan/8.mp4'),
            require('../../assets/video/xuanchuan/9.mp4'),
        ]
      }
  },
  methods: {
    off() {
        this.show = 0
    },
    showIt(x) {
        this.show = 1;
        this.mark = x
        
    }
  }
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
            cursor: pointer;
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
    background-image: url(../../assets/img/Landscape/xuanchuan/1.jpg)
}
.img2 {
    background-image: url(../../assets/img/Landscape/xuanchuan/2.jpg)
}
.img3 {
    background-image: url(../../assets/img/Landscape/xuanchuan/3.jpg)
}
.img4 {
    background-image: url(../../assets/img/Landscape/xuanchuan/4.jpg)
}
.img5 {
    background-image: url(../../assets/img/Landscape/xuanchuan/5.jpg)
}
.img6 {
    background-image: url(../../assets/img/Landscape/xuanchuan/6.jpg)
}
.img7 {
    background-image: url(../../assets/img/Landscape/xuanchuan/7.jpg)
}
.img8 {
    background-image: url(../../assets/img/Landscape/xuanchuan/8.jpg)
}
.img9 {
    background-image: url(../../assets/img/Landscape/xuanchuan/9.jpg)
}
.video {
    width: 864px;
    height: 486px;
    position: absolute;
    float: left;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: show 2s ;
}
#video {
    border: 2px solid rgb(0, 89, 255);
}
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.off {
    cursor: pointer;
    width: 25px;
    height: 25px;;
    position: absolute;
    float: left;
    right: -40px;
    top: 0px;
    z-index: 6;
    background-color: rgb(176, 207, 255);
    p{
        position: relative;
        top:-11px;
        left:1px;
        float: left;
        font-size: 42px;
        color: rgb(57, 125, 218);
        font-weight: 700;
    }
}
.greyall {
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #000;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0.5;
}
</style>
