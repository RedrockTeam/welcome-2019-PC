<template>
    <div class="all">
        <div class="carousel">
                <div class="left" @click="left()">
                </div>
                <div class="mid">
                    <transition-group tag="ul" name="image" class="tran">
                        <li v-for="(image,index) in img" :key="index+1" class="li" v-show="index === mark">
                            <a><img :src="image"></a>
                        </li>
                    </transition-group>
                    <div class="smallBtn">
                        <ul>
                            <li class="sbtn" v-for="(item,index) in img.length" :key="index" @click="change(index)" v-bind:class="{'redbtn' : index === mark}" ></li>
                        </ul>
                    </div>
                </div>
                <div class="right" @click="right()">
                </div>
            </div>
            <div class="info">
                <span>红高粱</span>
                <p>红高粱食堂伫立于兴业苑食堂上方，红高粱食堂总具有自己的风格，不断推陈出新，在这里你可以品尝到新的变化！
推荐菜目：冒菜，花溪米线，土耳其烤肉饭
人均消费：12元
</p>
            </div>
    </div>
</template>


<script>
import { clearTimeout } from 'timers';

export default {
  name: 'hglCarousel',
  methods: {
    left() {
      this.autoflag = false
      if (this.isDisabled || this.auto) {
        return false
      }

      if (this.mark == 0) {
        this.mark = this.img.length - 1
      } else {
        this.mark -= 1
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
        this.autoflag = true
      }, 1000)
    },
    right() {
      this.autoflag = false
      if (this.isDisabled) {
        return false
      }

      if (this.mark == this.img.length - 1) {
        this.mark = 0
      } else {
        this.mark += 1
      }
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    },
    change(x) {
      this.autoflag = false
      if (this.isDisabled) {
        return false
      }
      this.mark = x
      this.isDisabled = true
      setTimeout(() => {
        this.isDisabled = false
      }, 1000)
    },
    autoPlay() {
      if (this.autoflag == false) {
        return false
      }
      this.mark++;
      if (this.mark == this.img.length) {
        this.mark = 0
      }
      this.auto = true
      setTimeout(() => {
        this.auto = false
      }, 1000)
    },
  },
  data() {
    return {
      mark: 1,
      img: [
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img1.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img2.jpg'),
        require('../../../assets/img/Strategy/xueshengshitang/hgl/img3.jpg'),
      ],
      isDisabled: false,
      auto: false,
      autoflag: true,
    }
  },
  created() {
    this.timer = setInterval(this.autoPlay, 4000)
  },
}
</script>

<style lang="scss" scoped>
.all {
    position: absolute;
    left: -76px;
}
.smallBtn {
    position: absolute;
    left: 240px;
    top: 308px;
    width: 200px;
    height: 20px;
    margin: 0 auto;
    ul {
        list-style: none;
        li:hover {
            width: 9px;
            height: 9px;
            background-color: rgb(255, 121, 156)
        }
    }
}
.sbtn {
    margin-left: 20px;
    top: 10px;
    float: left;
    width: 7px;
    height: 8px;
    background-color: rgb(109, 146, 254);
    cursor: pointer;
}

.carousel {
    position: relative;
    top: 120px;
    left: 350px;
}
.left {
    position: relative;
    right: 14px;
    top: 100px;
    float: left;
    width: 23px;
    height: 41px;
    background-image: url(../../../assets/img/Strategy/xueshengshitang/arrowL.png);

}
.left:hover {
    background-image: url(../../../assets/img/Strategy/xueshengshitang/arrowLhover.png);
}
.right {
    position: relative;
    left: 14px;
    top: 100px;
    float: left;
    width: 23px;
    height: 41px;
    background-image: url(../../../assets/img/Strategy/xueshengshitang/arrowR.png);
    :hover {
        background-image: url(../../../assets/img/Strategy/xueshengshitang/arrowRhover.png);
    }
}
.right:hover {
    background-image: url(../../../assets/img/Strategy/xueshengshitang/arrowRhover.png);
}
.mid {
    position: relative;
    top: 1px;
    left: -1px;
    width: 559px;
    height: 406px;
    float: left;
    overflow: hidden;
}
.tran {
    clear: both;
    display: block;
    width: 559px;
}
.li {
    list-style: none;
    position: absolute;
}
.info {
    position: relative;
    top: 460px;
    right: 300px;
    text-align: left;
    span {
        font-size: 18px;
        color: rgb(35, 72, 179);
        margin-bottom: 20px;
    }
    p {
        float: left;
        width: 750px;
        height: 100px;
        position: relative;
        left: 600px;
        top: -370px;
        font-size: 12px;
        font-family: "宋体";
        color: rgb(84, 124, 236);
    }
}


.image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
}
.image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
}
.image-enter {
    transform: translateX(100%);
}
.image-leave {
    transform: translateX(0);
}

.redbtn {
    width: 9px;
    height: 9px;
    background-color: rgb(255, 121, 156)
}
</style>
