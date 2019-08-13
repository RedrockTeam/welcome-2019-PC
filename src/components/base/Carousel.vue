<template>
    <div class="all">
        <div class="carousel">
                <div class="left" @click="left()">
                </div>
                <div class="mid">
                    <transition-group tag="ul" name="image" class="tran">
                        <li
                          v-for="(image,index) in img"
                          :key="index+1" class="li" v-show="index === mark">
                            <a><img :src="image"></a>
                        </li>
                    </transition-group>
                </div>
                    <div class="smallBtn">
                        <ul>
                            <li
                              class="sbtn"
                              v-for="(item,index) in img.length"
                              :key="index" @click="change(index)"
                              v-bind:class="{'redbtn' : index === mark}"
                            ></li>
                        </ul>
                    </div>
                <div class="right" @click="right()">
                </div>
            </div>
            <div class="info">
                <div>{{canteen.title}}：</div>
                <p>
                  {{canteen.content[0]}}<br />
                  {{canteen.content[1]}}<br />
                  {{canteen.content[2]}}</p>
            </div>
    </div>
</template>

<script>/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */

export default {
  name: 'zxstCarousel',
  props: {
    img: Array,
    canteen: Object,
  },
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
      this.mark += 1;
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
    position: relative;
}
.smallBtn {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 295px;
    height: 20px;
    margin: 0 auto;
    ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
      width: 70px;
        list-style: none;
        li:hover {
            width: 9px;
            height: 9px;
            background-color: rgb(255, 121, 156)
        }
    }
}
.sbtn {
    top: 10px;
    float: left;
    width: 7px;
    height: 8px;
    background-color: rgb(109, 146, 254);
    cursor: pointer;
}

.carousel {
    position: relative;
}
.left {
    position: absolute;
    left: 107px;
    top: 126px;
    width: 23px;
    height: 41px;
    background-image: url(../../assets/img/Strategy/xueshengshitang/arrowL.png);

}
.left:hover {
    background-image: url(../../assets/img/Strategy/xueshengshitang/arrowLhover.png);
}
.right {
    position: absolute;
    right: 107px;
    top: 126px;
    width: 23px;
    height: 41px;
    background-image: url(../../assets/img/Strategy/xueshengshitang/arrowR.png);
    :hover {
        background-image: url(../../assets/img/Strategy/xueshengshitang/arrowRhover.png);
    }
}
.right:hover {
    background-image: url(../../assets/img/Strategy/xueshengshitang/arrowRhover.png);
}
.mid {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 559px;
    height: 268px;
    border: 2px solid #0235c7;
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
  width: 715px;
    position: absolute;
    left: 0;
    right: 0;
    top: 338px;
    text-align: left;
    margin: 0 auto;
    div {
        font-size: 18px;
        color: rgb(35, 72, 179);
        margin-bottom: 20px;
    }
    p {
        height: 100px;
        position: relative;
        font-size: 14px;
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
