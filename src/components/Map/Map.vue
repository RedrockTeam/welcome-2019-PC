<template>
  <div class="wrapper">
    <Title>重邮地图</Title>
    <div class="map-border">
      <div class="header">
        <div class="header-left">
          <input
            type="text"
            v-model.trim="searchText"
            placeholder="请输入搜索地点"
            @keyup.enter="onSearch(searchText)"
          />
          <header-btn @click="onSearch(searchText)">
            <img width="21" height="21" src="../../assets/img/Map/search.png" />
          </header-btn>
          <div class="search-result" v-show="searched">
            <span class="result-tips" v-if="result.length">你要找的是不是：</span>
            <span class="result-tips" v-else>未查询到此地点</span>
            <span class="result-wrapper">
              <span
                class="result-place"
                v-for="(place, index) of result"
                :key="index"
                @click="onGoPlace(place.name)"
              >{{ place.name }}<span v-if="index < result.length - 1">、</span></span>
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
            >X</div>
          </div>
        </div>
        <div class="tips">tips: 点击地图可以添加标记，再次点击删除标记</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import MapBtn from './MapBtn.vue'
import HeaderBtn from './HeaderBtn.vue'

const ZOOMSTEP = 0.6
const MAXSCALE = 4
const MINSCALE = 1

export default {
  data() {
    return {
      addresses: [
        '中心食堂',
        '太极操场',
        '新运动场',
        '国际学院',
        '体育学院',
        '新校门',
        '校史馆',
        '通信学院',
        '教务处',
        '四教',
      ],
      searchText: '',
      result: [],
      scale: 1,
      mapLeft: 0,
      mapTop: 0,
      searched: false,
      flags: [],
      list: [
        {
          name: '外国语学院',
          position: [991, 217],
        },
        {
          name: '国际学院',
          position: [991, 217],
        },
        {
          name: '八教',
          position: [730, 321],
        },
        {
          name: '传媒艺术学院',
          position: [730, 321],
        },
        {
          name: '经济管理学院',
          position: [488, 261],
        },
        {
          name: '现代邮政学院',
          position: [488, 261],
        },
        {
          name: '23A栋',
          position: [312, 406],
        },
        {
          name: '23B栋',
          position: [312, 406],
        },
        {
          name: '22栋',
          position: [91, 392],
        },
        {
          name: '21栋',
          position: [-42, 393],
        },
        {
          name: '留学生楼',
          position: [524, 167],
        },
        {
          name: '三教',
          position: [793, 58],
        },
        {
          name: '研究生院',
          position: [793, 58],
        },
        {
          name: '四教',
          position: [981, 11],
        },
        {
          name: '教务处',
          position: [981, 11],
        },
        {
          name: '通信学院',
          position: [987, -105],
        },
        {
          name: '逸夫科技楼',
          position: [927, -175],
        },
        {
          name: '档案室',
          position: [927, -175],
        },
        {
          name: '校史馆',
          position: [927, -175],
        },
        {
          name: '中心网球场',
          position: [866, -295],
        },
        {
          name: '新校门',
          position: [782, -418],
        },
        {
          name: '紫薇篮球场',
          position: [692, -117],
        },
        {
          name: '体育学院',
          position: [452, -5],
        },
        {
          name: '风雨操场',
          position: [452, -5],
        },
        {
          name: '数字图书馆',
          position: [579, -210],
        },
        {
          name: '信息中心',
          position: [579, -210],
        },
        {
          name: '新行政楼',
          position: [592, -323],
        },
        {
          name: '招生就业处',
          position: [592, -323],
        },
        {
          name: '20栋',
          position: [345, 232],
        },
        {
          name: '19栋',
          position: [293, 232],
        },
        {
          name: '18栋',
          position: [178, 232],
        },
        {
          name: '17栋',
          position: [110, 232],
        },
        {
          name: '太极运动场',
          position: [179, 136],
        },
        {
          name: '新运动场',
          position: [179, 136],
        },
        {
          name: '太极操场',
          position: [179, 136],
        },
        {
          name: '游泳池',
          position: [224, 9],
        },
        {
          name: '灯光篮球场',
          position: [105, -1],
        },
        {
          name: '风华运动场',
          position: [170, -104],
        },
        {
          name: '老操场',
          position: [170, -104],
        },
        {
          name: '马克思主义学院',
          position: [218, -228],
        },
        {
          name: '自动化学院',
          position: [157, -267],
        },
        {
          name: '先进制造学院',
          position: [119, -309],
        },
        {
          name: '二教',
          position: [129, -224],
        },
        {
          name: '计算机学院',
          position: [129, -224],
        },
        {
          name: '软件学院',
          position: [129, -224],
        },
        {
          name: '老校门',
          position: [14, -472],
        },
        {
          name: '崇文门',
          position: [14, -472],
        },
        {
          name: '科技会堂',
          position: [-119, -470],
        },
        {
          name: '创新创业教育学院',
          position: [-48, -433],
        },
        {
          name: '八十万',
          position: [-18, -309],
        },
        {
          name: '安法学院',
          position: [-109, -321],
        },
        {
          name: '七教',
          position: [-109, -321],
        },
        {
          name: 'EMS',
          position: [-109, -321],
        },
        {
          name: '重邮医院',
          position: [-252, -456],
        },
        {
          name: '重邮宾馆',
          position: [-358, -456],
        },
        {
          name: '老图书馆',
          position: [-114, -212],
        },
        {
          name: '中心食堂',
          position: [-112, -100],
        },
        {
          name: '大西北食堂',
          position: [-112, -100],
        },
        {
          name: '红房子',
          position: [-112, -100],
        },
        {
          name: '红高粱食堂',
          position: [-26, 267],
        },
        {
          name: '兴业苑食堂',
          position: [-26, 267],
        },
        {
          name: '4栋',
          position: [-19, 31],
        },
        {
          name: '5栋',
          position: [-19, 31],
        },
        {
          name: '15栋',
          position: [-27, 125],
        },
        {
          name: 'cwt',
          position: [-27, 125],
        },
        {
          name: '1栋',
          position: [-120, 53],
        },
        {
          name: '2栋',
          position: [-120, 53],
        },
        {
          name: '3栋',
          position: [-120, 53],
        },
        {
          name: '6栋',
          position: [-120, 53],
        },
        {
          name: '16栋',
          position: [-93, 158],
        },
        {
          name: '雨红莲',
          position: [-22, -107],
        },
        {
          name: '信科楼',
          position: [-350, -373],
        },
        {
          name: '信科大厦',
          position: [-350, -373],
        },
        {
          name: '财务处/一卡通中心',
          position: [-350, -373],
        },
        {
          name: '一教',
          position: [-314, -312],
        },
        {
          name: '光电工程学院',
          position: [-314, -312],
        },
        {
          name: '国际半导体学院',
          position: [-314, -312],
        },
        {
          name: '情人坡',
          position: [-308, -208],
        },
        {
          name: '理学院',
          position: [-408, -255],
        },
        {
          name: '保卫处/武装部',
          position: [-486, -227],
        },
        {
          name: '11栋',
          position: [-273, -106],
        },
        {
          name: '12栋',
          position: [-273, -106],
        },
        {
          name: '桂花篮球场',
          position: [-380, -124],
        },
        {
          name: '延生食堂',
          position: [170, -104],
        },
        {
          name: '千喜鹤食堂',
          position: [170, -104],
        },
        {
          name: '学工部/学生处',
          position: [170, -104],
        },
        {
          name: '24栋',
          position: [-282, 133],
        },
        {
          name: '25栋',
          position: [-282, 133],
        },
        {
          name: '26栋',
          position: [-282, 133],
        },
        {
          name: '27栋',
          position: [-490, 133],
        },
        {
          name: '28栋',
          position: [-490, 133],
        },
        {
          name: '29栋',
          position: [-490, 133],
        },
        {
          name: '30栋',
          position: [-673, 133],
        },
        {
          name: '39栋',
          position: [-673, 133],
        },
        {
          name: '31栋',
          position: [-570, 24],
        },
        {
          name: '32栋',
          position: [-570, 24],
        },
        {
          name: '35栋',
          position: [-570, 24],
        },
        {
          name: '8栋',
          position: [-575, -108],
        },
        {
          name: '9栋',
          position: [-575, -108],
        },
        {
          name: '10栋',
          position: [-575, -108],
        },
        {
          name: '33栋',
          position: [-575, -108],
        },
        {
          name: '34栋',
          position: [-575, -108],
        },
        {
          name: '36栋',
          position: [-705, -103],
        },
        {
          name: '37栋',
          position: [-705, -103],
        },
        {
          name: '南部校区',
          position: [-1049, -224],
        },
        {
          name: '通鼎实验大楼',
          position: [-1018, -227],
        },
        {
          name: '综合实验楼',
          position: [-1018, -227],
        },
        {
          name: '生物信息学院',
          position: [-1018, -227],
        },
        {
          name: '兴业苑',
          position: [218, 316],
        },
        {
          name: '知行苑',
          position: [14, 182],
        },
        {
          name: '明理苑',
          position: [-453, 142],
        },
        {
          name: '宁静苑',
          position: [-612, -17],
        },
        {
          name: '四海苑',
          position: [-757, -67],
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
  },

  methods: {
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
        if (e.target === map && !left && !top) this.addFlag(e)
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
      this.mapLeft = left
      this.mapTop = top
    },
    onSearch(text) {
      if (text) {
        this.result = this.list.filter(place => place.name.includes(text)).slice(0, 1) // 控制显示几个搜索结果
        this.searched = true
      }
    },
    addFlag(e) {
      this.flags.push({ left: e.offsetX, top: e.offsetY })
    },
    removeFlag(flag) {
      this.flags = this.flags.filter(f => f !== flag)
    },
  },

  watch: {
    scale() {
      console.log(this.scale)
      this.$refs.map.style.transform = `scale(${this.scale})`
    },
    mapLeft() {
      this.$refs.map.style.left = `${this.mapLeft}px`
    },
    mapTop() {
      this.$refs.map.style.top = `${this.mapTop}px`
    },
    searchText() {
      if (!this.searchText) {
        this.searched = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 1166px;
  height: 745px;
  padding-top: 60px;
  margin: 0 auto 81px;
  .map-border {
    margin-top: 20px;
    width: 1166px;
    height: 551px;
    background: url(../../assets/img/Map/border.png);
    .header {
      display: flex;
      justify-content: space-between;
      width: 86%;
      height: 77px;
      margin: 0 auto;
      .header-left {
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
          background-image: url(../../assets/img/Map/map.jpg);
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
            color: red;
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
