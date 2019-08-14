<template>
  <div class="m-wrapper">
    <Title class="m-title" :isFire="isFire">重邮地图</Title>
    <v-bubble-animation class="v-bubble-animation" />
    <div class="map-border" ref="bg">
      <div class="header">
        <div class="header-left">
          <input
            type="text"
            v-model.trim="searchText"
            placeholder="请输入搜索地点"
            @keyup.enter="onSearch(searchText)"
          />
          <div class="clear" @click="clear"></div>
          <header-btn @click="onSearch(searchText)">
            <img width="21" height="21" src="../../assets/img/Map/search.png" />
          </header-btn>
          <div class="search-result" v-show="searched">
            <span class="result-tips" v-if="result">你要找的是不是：</span>
            <span class="result-tips" v-else>未查询到此地点</span>
            <span class="result-wrapper">
              <span
                class="result-place"
                @click="onGoPlace(result)"
              >{{ result }}</span>
            </span>
          </div>
        </div>
        <div class="header-right">
          <header-btn
            type="button"
            class="small-btn"
            @click="onZoomOut"
          ><span class="small"></span></header-btn>
          <header-btn
            type="button"
            class="plus-btn"
            @click="onZoomUp"
          ><span class="plus"></span></header-btn>
        </div>
      </div>
      <div class="map-wrapper">
        <div class="sidebar">
          <div class="title">
            常用地图
          </div>
          <div class="btn-wrapper">
            <map-btn
              class="map-btn"
              v-for="(address, index) in addresses"
              :key="index"
              @go-place="onGoPlace(address)"
            >{{ address }}</map-btn>
          </div>
        </div>
        <div class="map">
          <div
            id="map"
            ref="map"
            @mousedown.prevent="move"
          >
            <div
              class="flag"
              v-for="(flag, index) of flags"
              :key="index"
              :style="{ top: `${flag.top}px`, left: `${flag.left}px` }"
              @click="removeFlag(flag)"
            ></div>
          </div>
        </div>
        <div class="tips">tips: 点击地图可以添加标记，再次点击删除标记</div>
      </div>
    </div>
    <content-bg :isFire="isFire" @on-fire="fire()" />
  </div>
</template>

<script>
import Title from '@/components/base/Title.vue'
import MapBtn from './MapBtn.vue'
import HeaderBtn from './HeaderBtn.vue'
import ContentBg from '@/components/base/ContentBg.vue'
import VBubbleAnimation from '@/components/base/VBubbleAnimation.vue'

const ZOOMSTEP = 0.6
const MAXSCALE = 4
const MINSCALE = 1
const WIDTHMIDPOINT = 323
const HEIGHTMIDPOINT = 190

export default {
  data() {
    return {
      isFire: false,
      addresses: [
        '中心食堂',
        '太极操场',
        '红岩网校',
        '信科大楼',
        '二教',
        '新校门',
        '老校门',
        '校史馆',
        '教务处',
        '老图书馆',
      ],
      searchText: '',
      result: '',
      scale: 1,
      mapLeft: 0,
      mapTop: 0,
      searched: false,
      flags: [],
      list: [
        {
          name: '第八教学楼',
          position: [167, 115],
        },
        {
          name: '传媒艺术学院',
          position: [167, 115],
        },
        {
          name: '兴业苑',
          position: [270, 108],
        },
        {
          name: '兴业苑7舍（23A栋）',
          position: [240, 99],
        },
        {
          name: '兴业苑8舍（23B栋）',
          position: [265, 101],
        },
        {
          name: '兴业苑6舍（22栋）',
          position: [295, 101],
        },
        {
          name: '兴业苑5舍（21栋）',
          position: [338, 101],
        },
        {
          name: '兴业苑4舍（20栋）',
          position: [247, 123],
        },
        {
          name: '兴业苑3舍（19栋）',
          position: [263, 122],
        },
        {
          name: '兴业苑2舍（18栋）',
          position: [286, 122],
        },
        {
          name: '兴业苑1舍（17栋）',
          position: [301, 122],
        },
        {
          name: '红高粱食堂',
          position: [333, 120],
        },
        {
          name: '经济管理学院',
          position: [192, 126],
        },
        {
          name: '现代邮政学院',
          position: [192, 126],
        },
        {
          name: '留学生楼',
          position: [212, 152],
        },
        {
          name: '第五教学楼',
          position: [131, 146],
        },
        {
          name: '外国语学院',
          position: [131, 146],
        },
        {
          name: '国际学院',
          position: [131, 146],
        },
        {
          name: '太极操场',
          position: [276, 149],
        },
        {
          name: '新运动场',
          position: [276, 149],
        },
        {
          name: '学生活动中心',
          position: [266, 167],
        },
        {
          name: '红岩网校',
          position: [266, 167],
        },
        {
          name: '第四教学楼',
          position: [120, 177],
        },
        {
          name: '教务处',
          position: [120, 177],
        },
        {
          name: '第三教学楼',
          position: [150, 172],
        },
        {
          name: '研究生院',
          position: [150, 172],
        },
        {
          name: '北校门',
          position: [110, 196],
        },
        {
          name: '体育学院',
          position: [214, 182],
        },
        {
          name: '风雨操场',
          position: [214, 182],
        },
        {
          name: '游泳池',
          position: [246, 192],
        },
        {
          name: '灯光篮球场',
          position: [276, 193],
        },
        {
          name: '韵达 & 申通',
          position: [326, 143],
        },
        {
          name: '明理苑1舍（24栋）',
          position: [361, 152],
        },
        {
          name: '明理苑2舍（25栋）',
          position: [387, 157],
        },
        {
          name: '明理苑3舍（26栋）',
          position: [407, 158],
        },
        {
          name: '明理苑4舍（27栋）',
          position: [427, 159],
        },
        {
          name: '明理苑5舍（28栋）',
          position: [440, 159],
        },
        {
          name: '明理苑6舍（29栋）',
          position: [459, 158],
        },
        {
          name: '明理苑7舍（30栋）',
          position: [479, 157],
        },
        {
          name: '明理苑9舍（39栋）',
          position: [500, 151],
        },
        {
          name: '明理苑',
          position: [436, 142],
        },
        {
          name: '知行苑4舍（4栋）',
          position: [319, 170],
        },
        {
          name: '知行苑6舍（6栋）',
          position: [343, 169],
        },
        {
          name: '知行苑5舍（5栋）',
          position: [326, 194],
        },
        {
          name: '中通',
          position: [326, 194],
        },
        {
          name: '知行苑1舍（1栋）',
          position: [365, 176],
        },
        {
          name: '知行苑2舍（2栋）',
          position: [359, 180],
        },
        {
          name: '知行苑3舍（3栋）',
          position: [358, 189],
        },
        {
          name: '千喜鹤食堂',
          position: [406, 177],
        },
        {
          name: '学工部 / 学生处',
          position: [406, 177],
        },
        {
          name: '延生食堂',
          position: [406, 158],
        },
        {
          name: '明理苑8舍（31栋）',
          position: [442, 185],
        },
        {
          name: '知行苑',
          position: [308, 177],
        },
        {
          name: '宁静苑6舍（32栋）',
          position: [465, 184],
        },
        {
          name: '宁静苑9舍（35栋）',
          position: [485, 184],
        },
        {
          name: '宁静苑',
          position: [435, 203],
        },
        {
          name: '宁静苑7舍（33栋）',
          position: [458, 202],
        },
        {
          name: '宁静苑2舍（9栋）',
          position: [427, 218],
        },
        {
          name: '宁静苑1舍（8栋）',
          position: [447, 127],
        },
        {
          name: '宁静苑8舍（34栋）',
          position: [469, 217],
        },
        {
          name: '四海苑1舍（36栋）',
          position: [491, 199],
        },
        {
          name: '四海苑2舍（37栋）',
          position: [487, 216],
        },
        {
          name: '四海苑',
          position: [511, 207],
        },
        {
          name: '宁静苑4舍（11栋）',
          position: [373, 220],
        },
        {
          name: '宁静苑5舍（12栋）',
          position: [370, 203],
        },
        {
          name: '桂花篮球场',
          position: [402, 205],
        },
        {
          name: '大西北',
          position: [346, 218],
        },
        {
          name: '中心食堂',
          position: [321, 209],
        },
        {
          name: '雨红莲',
          position: [333, 209],
        },
        {
          name: '红房子',
          position: [333, 209],
        },
        {
          name: '风华运动场',
          position: [270, 218],
        },
        {
          name: '老操场',
          position: [270, 218],
        },
        {
          name: '樱花篮球场',
          position: [189, 222],
        },
        {
          name: '紫薇篮球场',
          position: [189, 222],
        },
        {
          name: '通信学院',
          position: [151, 212],
        },
        {
          name: '逸夫楼',
          position: [161, 234],
        },
        {
          name: '档案馆',
          position: [161, 234],
        },
        {
          name: '校史馆',
          position: [161, 234],
        },
        {
          name: '中心网球场',
          position: [140, 270],
        },
        {
          name: '新校门',
          position: [169, 302],
        },
        {
          name: '数字图书馆',
          position: [190, 260],
        },
        {
          name: '信息中心',
          position: [190, 260],
        },
        {
          name: '招生就业处',
          position: [207, 286],
        },
        {
          name: '新行政楼',
          position: [207, 286],
        },
        {
          name: '顺丰 & 圆通',
          position: [227, 254],
        },
        {
          name: '第二教学楼',
          position: [255, 247],
        },
        {
          name: '计算机学院',
          position: [255, 247],
        },
        {
          name: '软件学院',
          position: [255, 247],
        },
        {
          name: '二教',
          position: [255, 247],
        },
        {
          name: '先进制造学院',
          position: [244, 276],
        },
        {
          name: '马克思学院',
          position: [271, 296],
        },
        {
          name: '自动化学院',
          position: [294, 259],
        },
        {
          name: '百世',
          position: [289, 295],
        },
        {
          name: '八十万',
          position: [319, 296],
        },
        {
          name: 'EMS',
          position: [327, 291],
        },
        {
          name: '第七教学楼',
          position: [349, 296],
        },
        {
          name: '安法学院',
          position: [349, 296],
        },
        {
          name: '长波楼',
          position: [311, 275],
        },
        {
          name: '第一教学楼',
          position: [339, 273],
        },
        {
          name: '光电工程学院',
          position: [339, 273],
        },
        {
          name: '国际半导体学院',
          position: [339, 273],
        },
        {
          name: '老图书馆',
          position: [321, 255],
        },
        {
          name: '老校门',
          position: [284, 322],
        },
        {
          name: '崇文门',
          position: [284, 322],
        },
        {
          name: '创新创业孵化基地',
          position: [296, 312],
        },
        {
          name: '科技会堂',
          position: [334, 322],
        },
        {
          name: '校医院',
          position: [362, 319],
        },
        {
          name: '信科大楼',
          position: [367, 295],
        },
        {
          name: '信科大厦',
          position: [367, 295],
        },
        {
          name: '财务处',
          position: [367, 295],
        },
        {
          name: '一卡通中心',
          position: [367, 295],
        },
        {
          name: '理学院',
          position: [378, 270],
        },
        {
          name: '情人坡',
          position: [390, 238],
        },
        {
          name: '武装部 / 保卫处',
          position: [414, 228],
        },
        {
          name: '重邮宾馆',
          position: [391, 318],
        },
        {
          name: '西校门',
          position: [453, 313],
        },
        {
          name: '网球场',
          position: [470, 233],
        },
        {
          name: '羽毛球场',
          position: [470, 233],
        },
        {
          name: '生物信息学院',
          position: [541, 232],
        },
        {
          name: '综合实验大楼',
          position: [534, 252],
        },
        {
          name: '通鼎实验大楼',
          position: [534, 252],
        },
        {
          name: '二维码大楼',
          position: [534, 252],
        },
      ],
    }
  },

  computed: {
    isFocused() {
      return (!this.mapLeft && !this.mapTop)
    },
  },

  components: {
    Title,
    MapBtn,
    HeaderBtn,
    ContentBg,
    VBubbleAnimation,
  },

  methods: {
    fire() {
      this.isFire = !this.isFire
    },
    focus() {
      return new Promise((resolve) => {
        const { map } = this.$refs
        map.style.transition = 'top .1s, left .1s'
        const cb = () => {
          map.removeEventListener('transitionend', cb)
          map.style.transition = 'transform .6s'
          resolve()
        }
        map.addEventListener('transitionend', cb)
        this.mapLeft = 0
        this.mapTop = 0
      })
    },
    async onZoomOut() {
      if (this.scale > MINSCALE) {
        if (!this.isFocused) {
          await this.focus()
        }
        this.scale -= ZOOMSTEP
      }
    },
    onZoomUp() {
      if (this.scale < MAXSCALE) {
        this.scale += 0.6
      }
    },
    move(e) {
      const { map } = this.$refs // 获取目标元素
      // 算出鼠标相对元素的位置
      const disX = e.clientX - map.offsetLeft
      const disY = e.clientY - map.offsetTop
      let top
      let left
      document.onmousemove = (ev) => { // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        left = ev.clientX - disX
        top = ev.clientY - disY
        // 移动当前元素
        const leftMovableDis = (this.scale - 1) * 646 / 2
        const topMovableDis = (this.scale - 1) * 381 / 2
        if (left > -leftMovableDis && left < leftMovableDis) {
          this.mapLeft = left
        }
        if (top > -topMovableDis && top < topMovableDis) {
          this.mapTop = top
        }
      }
      document.onmouseup = () => {
        // 这里触发 addFlag，区分 click 和 mouseup
        if (e.target === map && !left && !top) {
          this.addFlag({ left: e.offsetX || e.layerX, top: e.offsetY || e.layerY })
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    zoomToMax() {
      return new Promise((resolve) => {
        this.scale = MAXSCALE
        const { map } = this.$refs
        const cb = () => {
          map.removeEventListener('transitionend', cb)
          resolve()
        }
        map.addEventListener('transitionend', cb)
      })
    },
    async zoomToMin() {
      if (!this.isFocused) {
        await this.focus()
      }
      this.scale = MINSCALE
    },
    async onGoPlace(address) {
      if (this.scale !== MAXSCALE) {
        await this.zoomToMax()
      }
      const [place] = this.list.filter(item => item.name === address)
      const [left, top] = place.position
      const { map } = this.$refs
      map.style.transition = 'all .6s'
      const cb = () => {
        map.removeEventListener('transitionend', cb)
        map.style.transition = 'transform .6s'
      }
      map.addEventListener('transitionend', cb)
      this.mapLeft = this.leftConvert(left)
      this.mapTop = this.topConvert(top)
      this.addFlag({ left, top })
    },
    onSearch(text) {
      if (text) {
        const results = this.list.filter(place => place.name.includes(text))
        if (results.length) {
          this.result = results[0].name
        }
        this.searched = true
        if (this.result === text) {
          this.onGoPlace(text)
        }
      }
    },
    addFlag(position) {
      console.log(position)
      // 防止重复
      if (this.flags.some(flag => flag.left === position.left && flag.top === position.top)) return
      this.flags.push(position)
    },
    removeFlag(flag) {
      this.flags = this.flags.filter(f => f !== flag)
    },
    leftConvert(left) {
      return (WIDTHMIDPOINT - left) * MAXSCALE
    },
    topConvert(top) {
      return (HEIGHTMIDPOINT - top) * MAXSCALE
    },
    clear() {
      this.searchText = ''
      this.zoomToMin()
    },
  },

  watch: {
    scale() {
      this.$refs.map.style.transform = `scale(${this.scale})`
    },
    mapLeft(left) {
      this.$refs.map.style.left = `${left}px`
    },
    mapTop(top) {
      this.$refs.map.style.top = `${top}px`
    },
    searchText() {
      if (!this.searchText) {
        this.searched = false
        this.clear()
      }
    },
  },
}
</script>

<style scoped lang="scss">
.m-wrapper {
  width: 1166px;
  height: 745px;
  padding-top: 60px;
  margin: 0 auto 69px;
  position: relative;
  .m-title {
    margin: 0 auto;
    width: 309px;
  }
  .v-bubble-animation {
    position: absolute;
    top: 13px;
    left: 6px;
    filter: hue-rotate(130deg);
    z-index: 1;
  }
  .map-border {
    margin: 20px auto 0;
    width: 1166px;
    height: 550px;
    background: url(../../assets/img/Map/border.png) no-repeat;
    .header {
      display: flex;
      justify-content: space-between;
      width: 86%;
      height: 77px;
      margin: 0 auto;
      .header-left {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input {
          margin: 0 20px 0 74px;
          width: 238px;
          height: 39px;
          border: 2px solid #33b0ff;
          background: #8bdaff;
          color: #666666;
          text-indent: 12px;
          font-size: 16px;
          outline: none;
        }
        .clear {
          width: 18px;
          height: 4px;
          position: absolute;
          top: 36px;
          left: 284px;
          transform: rotate(45deg);
          background: #87a6ff;
          cursor: pointer;
          &::after {
            content: '';
            width: 4px;
            height: 18px;
            position: absolute;
            top: -7px;
            left: 7px;
            background: #87a6ff;
          }
        }
        img {
          margin-top: 12px;
          display: inline-block;
        }
        .search-result {
          margin-left: 20px;
          font-family: 'MicrosoftYaHei', Arial, Helvetica, sans-serif;
          color: #11318d;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          .result-tips {
            color: #c23960;
          }
          .result-wrapper {
            width: 274px;
            height: 20px;
            .result-place {
              cursor: pointer;
            }
          }
        }
      }
      .header-right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .small-btn {
          .small {
            display: inline-block;
            width: 16px;
            height: 4px;
            margin-bottom: 2px;
            background: #fff;
          }
          margin-right: 25px;
        }
        .plus-btn {
          .plus {
            display: inline-block;
            width: 16px;
            height: 4px;
            margin-bottom: 2px;
            background: #fff;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              top: -6px;
              left: 6px;
              width: 4px;
              height: 16px;
              display: inline-block;
              background: #fff;
            }
          }
          margin-right: 108px;
        }
      }
    }
    .map-wrapper {
      width: 947px;
      height: 489px;
      padding: 50px 34px;
      margin: -20px auto 0;
      position: relative;
      .sidebar {
        float: left;
        width: 198px;
        height: 389px;
        .title {
          color: #275fff;
          font-size: 26px;
          margin: 34px 0 14px;
        }
        .btn-wrapper {
          height: 309px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: space-between;
          .map-btn {
            margin-top: 10px;
          }
        }
      }
      .map {
        float: right;
        width: 654px;
        height: 389px;
        border: 4px solid #0235c7;
        margin: 500px;
        position: absolute;
        top: -448px;
        left: -243px;
        overflow: hidden;
        #map {
          background-image: url(../../assets/img/Map/map.png);
          background-size: 654px 389px;
          width: 100%;
          height: 100%;
          transition: transform .6s;
          transform: scale(1);
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
          .flag {
            display: inline-block;
            width: 17px;
            height: 21.5px;
            background-image: url(../../assets/img/Map/flag.png);
            background-repeat: no-repeat;
            background-size: 17px 21.5px;
            background-position: top right;
            position: absolute;
            transform: translate(-50%, -50%);
          }
        }
      }
      .tips {
        float: right;
        color: #fff;
        margin-right: 20px;
        margin-top: 396px;
      }
    }
  }
}
</style>
