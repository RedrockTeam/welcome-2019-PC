<template>
  <div class="lunbo">
    <img
      src="../../assets/img/Strategy/xueshengshitang/arrowL.png"
      ref="prev"
      id="prev"
      @click="prev"
      v-show="!leftMouseover"
      @mouseover="leftMouseover=true"
    >
    <img
      src="../../assets/img/Strategy/xueshengshitang/arrowLhover.png"
      ref="prev"
      id="prev"
      @click="prev"
      v-show="leftMouseover"
      @mouseout="leftMouseover=false"
    >
    <div class="lunbo-main">
      <div class="lunbo-box" @mouseover="stop" @mouseout="go">
        <div
          class="lunbo-content"
          ref="lbcontent"
          style="left: -563px;transition-duration: 0.5s;"
          :style="{width:(imglist.length+2)*563+'px'}"
        >
          <div
            :style="{
              backgroundImage: `url(${imglist[imglist.length - 1].imgsrc})`,
            }"
          ></div>
          <div
            v-for="(imgobj, index) in imglist"
            :key="index"
            :style="{
              backgroundImage: `url(${imgobj.imgsrc})`,
            }"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${imglist[0].imgsrc})`,
            }"
          ></div>
        </div>
      </div>
      <div class="lunbo-button">
        <div v-for="(imgobj, index) in imglist"
          :key="index"
          class="buttons"
          ref="buttons"
          @click="buttonclick(index)"
        ></div>
      </div>
    </div>
    <img
      src="../../assets/img/Strategy/xueshengshitang/arrowR.png"
      ref="next"
      id="next"
      @click="next"
      v-show="!rightMouseover"
      @mouseover="rightMouseover=true"
    >
    <img
      src="../../assets/img/Strategy/xueshengshitang/arrowRhover.png"
      ref="next"
      id="next"
      @click="next"
      v-show="rightMouseover"
      @mouseout="rightMouseover=false"
    >
  </div>
</template>

<script>
export default {
  props: {
    imglist: {
      type: Array,
    },
  },
  data() {
    return {
      timer: null,
      boolen: false,
      lightedbutton: 0,
      rightMouseover: false,
      leftMouseover: false,
      timer2: null,
    }
  },
  methods: {
    stop() {
      clearInterval(this.timer);
    },
    prev() {
      if (this.boolen) {
        return;
      }
      this.stop();
      this.lightedbutton -= 1;
      if (this.lightedbutton === -1) {
        this.lightedbutton = this.imglist.length - 1;
      }
      this.move(563);
      this.lightbutton();
      this.go();
    },
    next() {
      if (this.boolen) {
        return;
      }
      this.stop();
      this.lightedbutton += 1;
      if (this.lightedbutton === this.imglist.length) {
        this.lightedbutton = 0;
      }
      this.move(-563);
      this.lightbutton();
      this.go();
    },
    go() {
      this.timer = setInterval(() => {
        this.next();
      }, 3000);
    },
    move(distance) {
      this.boolen = true;
      if (
        parseInt(this.$refs.lbcontent.style.left, 10) >= (-563 * this.imglist.length)
        && parseInt(this.$refs.lbcontent.style.left, 10) <= -563
      ) {
        this.$refs.lbcontent.style.transitionDuration = '0.5s';
      }
      this.$refs.lbcontent.style.left = `${parseInt(this.$refs.lbcontent.style.left, 10) + distance}px`;
      this.timer2 = setTimeout(() => {
        if (parseInt(this.$refs.lbcontent.style.left, 10) > -563) {
          this.$refs.lbcontent.style.transitionDuration = '0s'
          this.$refs.lbcontent.style.left = `${-563 * this.imglist.length}px`;
        }
        if (parseInt(this.$refs.lbcontent.style.left, 10) < -563 * this.imglist.length) {
          this.$refs.lbcontent.style.transitionDuration = '0s';
          this.$refs.lbcontent.style.left = `${-563}px`;
        }
        this.boolen = false;
      }, 500);
    },
    lightbutton() {
      for (let i = 0; i < this.$refs.buttons.length; i += 1) {
        if (this.$refs.buttons[i].id === 'lightbutton') {
          this.$refs.buttons[i].id = '';
          break;
        }
      }
      this.$refs.buttons[this.lightedbutton].id = 'lightbutton';
    },
    buttonclick(i) {
      if (this.$refs.buttons[i].id === 'lightbutton' || this.boolen) {
        return;
      }
      this.stop();
      this.$refs.lbcontent.style.transitionDuration = '0.5s';
      this.$refs.lbcontent.style.left = `${-563 * (i + 1)}px`;
      this.lightedbutton = i;
      this.lightbutton();
      this.go();
    },
  },
  mounted() {
    this.$refs.buttons[0].id = 'lightbutton';
    this.go();
  },
  beforeDestroy() {
    this.stop();
    clearInterval(this.timer2)
  },
}
</script>

<style lang="scss" scoped>
    .lunbo {
      width: 650px;
      margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        #prev {
            cursor: pointer;
        }
        #next {
            cursor: pointer;
        }
        .lunbo-main {
            .lunbo-box {
                width: 563px;
                height: 275px;
                margin: 10px;
                border: 3px solid #0235c7;
                overflow: hidden;
                .lunbo-content {
                    height: 100%;
                    position: relative;
                    div {
                      display: inline-block;
                      width: 563px;
                      height: 275px;
                      background-position: center center;
                      background-size: cover;
                    }
                }
            }
            .lunbo-button {
                position: absolute;
                left: 50%;
                bottom: -4%;
                transform: translate(-50%);
                display: flex;
                align-items: center;
                .buttons {
                    width: 9px;
                    height: 9px;
                    background: #6d92fe;
                    margin-left: 10px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                #lightbutton {
                    width: 11px;
                    height: 11px;
                    background: #ff799c;
                }
            }
        }
    }
</style>
