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
            <img class="img" width="20" height="20" src="../../assets/img/Map/search.png" />
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
          name: '1栋',
          position: [384, 171],
        },
        {
          name: '2栋',
          position: [343, 178],
        },
        {
          name: '3栋',
          position: [356, 197],
        },
        {
          name: '4栋',
          position: [308, 170],
        },
        {
          name: '6栋',
          position: [338, 162],
        },
        {
          name: '5栋',
          position: [327, 189],
        },
        {
          name: '9栋',
          position: [448, 225],
        },
        {
          name: '8栋',
          position: [472, 223],
        },
        {
          name: '23A栋',
          position: [236, 97],
        },
        {
          name: '23B栋',
          position: [216, 96],
        },
        {
          name: '22栋',
          position: [285, 98],
        },
        {
          name: '21栋',
          position: [337, 97],
        },
        {
          name: '20栋',
          position: [218, 122],
        },
        {
          name: '19栋',
          position: [246, 121],
        },
        {
          name: '18栋',
          position: [262, 120],
        },
        {
          name: '17栋',
          position: [290, 120],
        },
        {
          name: '15栋',
          position: [338, 162],
        },
        {
          name: '16栋',
          position: [338, 162],
        },
        {
          name: '24栋',
          position: [359, 143],
        },
        {
          name: '25栋',
          position: [391, 162],
        },
        {
          name: '26栋',
          position: [407, 158],
        },
        {
          name: '27栋',
          position: [427, 159],
        },
        {
          name: '28栋',
          position: [453, 159],
        },
        {
          name: '29栋',
          position: [478, 158],
        },
        {
          name: '30栋',
          position: [500, 156],
        },
        {
          name: '31栋',
          position: [454, 192],
        },
        {
          name: '39栋',
          position: [534, 143],
        },
        {
          name: '32栋',
          position: [494, 188],
        },
        {
          name: '35栋',
          position: [527, 179],
        },
        {
          name: '33栋',
          position: [483, 198],
        },
        {
          name: '34栋',
          position: [487, 221],
        },
        {
          name: '11栋',
          position: [372, 223],
        },
        {
          name: '12栋',
          position: [367, 203],
        },
        {
          name: '36栋',
          position: [510, 195],
        },
        {
          name: '37栋',
          position: [522, 223],
        },
        {
          name: '第八教学楼',
          position: [136, 114],
        },
        {
          name: '传媒艺术学院',
          position: [136, 114],
        },
        {
          name: '兴业苑',
          position: [253, 99],
        },
        {
          name: '兴业苑7舍（23A栋）',
          position: [236, 97],
        },
        {
          name: '兴业苑8舍（23B栋）',
          position: [216, 96],
        },
        {
          name: '兴业苑6舍（22栋）',
          position: [285, 98],
        },
        {
          name: '兴业苑5舍（21栋）',
          position: [337, 97],
        },
        {
          name: '兴业苑4舍（20栋）',
          position: [218, 122],
        },
        {
          name: '兴业苑3舍（19栋）',
          position: [246, 121],
        },
        {
          name: '兴业苑2舍（18栋）',
          position: [262, 120],
        },
        {
          name: '兴业苑1舍（17栋）',
          position: [290, 120],
        },
        {
          name: '红高粱食堂',
          position: [325, 119],
        },
        {
          name: '理学院',
          position: [371, 278],
        },
        {
          name: '经济管理学院',
          position: [198, 129],
        },
        {
          name: '现代邮政学院',
          position: [198, 129],
        },
        {
          name: '留学生楼',
          position: [195, 156],
        },
        {
          name: '第五教学楼',
          position: [97, 143],
        },
        {
          name: '外国语学院',
          position: [97, 143],
        },
        {
          name: '国际学院',
          position: [97, 143],
        },
        {
          name: '太极操场',
          position: [261, 150],
        },
        {
          name: '新运动场',
          position: [261, 150],
        },
        {
          name: '学生活动中心',
          position: [249, 169],
        },
        {
          name: '红岩网校',
          position: [249, 169],
        },
        {
          name: '第四教学楼',
          position: [75, 175],
        },
        {
          name: '教务处',
          position: [75, 175],
        },
        {
          name: '第三教学楼',
          position: [117, 171],
        },
        {
          name: '研究生院',
          position: [117, 171],
        },
        {
          name: '北校门',
          position: [49, 192],
        },
        {
          name: '体育学院',
          position: [201, 189],
        },
        {
          name: '风雨操场',
          position: [201, 189],
        },
        {
          name: '游泳池',
          position: [219, 195],
        },
        {
          name: '灯光篮球场',
          position: [287, 196],
        },
        {
          name: '韵达 & 申通',
          position: [317, 141],
        },
        {
          name: '明理苑',
          position: [450, 163],
        },
        {
          name: '明理苑1舍（24栋）',
          position: [359, 143],
        },
        {
          name: '明理苑2舍（25栋）',
          position: [391, 162],
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
          position: [453, 159],
        },
        {
          name: '明理苑6舍（29栋）',
          position: [478, 158],
        },
        {
          name: '明理苑7舍（30栋）',
          position: [500, 156],
        },
        {
          name: '明理苑8舍（31栋）',
          position: [454, 192],
        },
        {
          name: '明理苑9舍（39栋）',
          position: [534, 143],
        },
        {
          name: '知行苑',
          position: [308, 177],
        },
        {
          name: '知行苑4舍（4栋）',
          position: [308, 170],
        },
        {
          name: '知行苑6舍（6栋）',
          position: [338, 162],
        },
        {
          name: '知行苑5舍（5栋）',
          position: [327, 189],
        },
        {
          name: '知行苑7舍（15栋）',
          position: [338, 162],
        },
        {
          name: '中通',
          position: [327, 189],
        },
        {
          name: '知行苑1舍（1栋）',
          position: [384, 171],
        },
        {
          name: '知行苑2舍（2栋）',
          position: [343, 178],
        },
        {
          name: '知行苑3舍（3栋）',
          position: [356, 197],
        },
        {
          name: '千喜鹤食堂',
          position: [403, 178],
        },
        {
          name: '学工部 / 学生处',
          position: [403, 178],
        },
        {
          name: '延生食堂',
          position: [403, 178],
        },
        {
          name: '宁静苑',
          position: [441, 193],
        },
        {
          name: '宁静苑6舍（32栋）',
          position: [494, 188],
        },
        {
          name: '宁静苑9舍（35栋）',
          position: [527, 179],
        },
        {
          name: '宁静苑7舍（33栋）',
          position: [483, 198],
        },
        {
          name: '宁静苑2舍（9栋）',
          position: [448, 225],
        },
        {
          name: '宁静苑1舍（8栋）',
          position: [472, 223],
        },
        {
          name: '宁静苑8舍（34栋）',
          position: [487, 221],
        },
        {
          name: '宁静苑4舍（11栋）',
          position: [372, 223],
        },
        {
          name: '宁静苑5舍（12栋）',
          position: [367, 203],
        },
        {
          name: '四海苑',
          position: [510, 195],
        },
        {
          name: '四海苑1舍（36栋）',
          position: [510, 195],
        },
        {
          name: '四海苑2舍（37栋）',
          position: [522, 223],
        },
        {
          name: '桂花篮球场',
          position: [422, 197],
        },
        {
          name: '大西北',
          position: [369, 218],
        },
        {
          name: '中心食堂',
          position: [319, 206],
        },
        {
          name: '雨红莲',
          position: [338, 233],
        },
        {
          name: '红房子',
          position: [338, 233],
        },
        {
          name: '风华运动场',
          position: [254, 223],
        },
        {
          name: '老操场',
          position: [254, 223],
        },
        {
          name: '紫薇篮球场',
          position: [155, 199],
        },
        {
          name: '通信学院',
          position: [112, 217],
        },
        {
          name: '逸夫楼',
          position: [91, 241],
        },
        {
          name: '档案馆',
          position: [91, 241],
        },
        {
          name: '校史馆',
          position: [91, 241],
        },
        {
          name: '网球场',
          position: [486, 230],
        },
        {
          name: '中心网球场',
          position: [124, 255],
        },
        {
          name: '新校门',
          position: [136, 315],
        },
        {
          name: '数字图书馆',
          position: [159, 267],
        },
        {
          name: '信息中心',
          position: [159, 267],
        },
        {
          name: '招生就业处',
          position: [186, 295],
        },
        {
          name: '新行政楼',
          position: [186, 295],
        },
        {
          name: '顺丰 & 圆通',
          position: [210, 281],
        },
        {
          name: '第二教学楼',
          position: [238, 245],
        },
        {
          name: '计算机学院',
          position: [238, 245],
        },
        {
          name: '软件学院',
          position: [238, 245],
        },
        {
          name: '二教',
          position: [238, 245],
        },
        {
          name: '先进制造学院',
          position: [280, 275],
        },
        {
          name: '马克思学院',
          position: [210, 281],
        },
        {
          name: '自动化学院',
          position: [254, 274],
        },
        {
          name: '百世快递',
          position: [277, 303],
        },
        {
          name: '八十万厕所',
          position: [296, 298],
        },
        {
          name: 'EMS 快递',
          position: [296, 298],
        },
        {
          name: 'ems',
          position: [296, 298],
        },
        {
          name: '第七教学楼',
          position: [351, 307],
        },
        {
          name: '安法学院',
          position: [351, 307],
        },
        {
          name: '长波楼',
          position: [299, 281],
        },
        {
          name: '第一教学楼',
          position: [331, 281],
        },
        {
          name: '光电工程学院',
          position: [331, 281],
        },
        {
          name: '国际半导体学院',
          position: [331, 281],
        },
        {
          name: '老图书馆',
          position: [300, 259],
        },
        {
          name: '老校门',
          position: [280, 336],
        },
        {
          name: '崇文门',
          position: [280, 336],
        },
        {
          name: '创新创业孵化基地',
          position: [298, 311],
        },
        {
          name: '科技会堂',
          position: [329, 334],
        },
        {
          name: '校医院',
          position: [362, 330],
        },
        {
          name: '信科大楼',
          position: [364, 301],
        },
        {
          name: '信科大厦',
          position: [364, 301],
        },
        {
          name: '财务处',
          position: [364, 301],
        },
        {
          name: '一卡通中心',
          position: [364, 301],
        },
        {
          name: '情人坡',
          position: [397, 247],
        },
        {
          name: '武装部 / 保卫处',
          position: [416, 232],
        },
        {
          name: '重邮宾馆',
          position: [394, 331],
        },
        {
          name: '西校门',
          position: [464, 314],
        },
        {
          name: '羽毛球场',
          position: [486, 230],
        },
        {
          name: '生物信息学院',
          position: [569, 230],
        },
        {
          name: '综合实验大楼',
          position: [595, 261],
        },
        {
          name: '通鼎实验大楼',
          position: [595, 261],
        },
        {
          name: '二维码大楼',
          position: [595, 261],
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
      // console.log(position.left, position.top)
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
      this.result = ''
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
  background-size: 100% 100%;
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
        .img {
          margin-top: 13px;
        }
        input {
          margin: 0 20px 0 74px;
          width: 238px;
          height: 39px;
          border-top: 3px solid #33b0ff;
          border-left: 3px solid #33b0ff;
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
      display: flex;
      .sidebar {
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
        width: 654Px;
        max-width: 654px;
        height: 389Px;
        max-height: 389px;
        border: 4px solid #0235c7;
        background-color: #96ecbb;
        margin: 500px;
        position: absolute;
        top: -53%;
        left: 8.5%;
        transform:translate(-50%,-50%);
        overflow: hidden;
        #map {
          background-image: url(../../assets/img/Map/map.jpg);
          background-size: 654Px 389Px;
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
            width: 11px;
            height: 14px;
            filter: brightness(140%);
            background-image: url(../../assets/img/Map/flag.png);
            background-repeat: no-repeat;
            background-size: 11px 14px;
            background-position: top right;
            position: absolute;
            transform: translate(-50%, -50%);
          }
        }
      }
      .tips {
        color: #fff;
        height: 30px;
        margin-left: 366px;
        margin-top: 400px;
        font-size: 14px;
      }
    }
  }
}
</style>
