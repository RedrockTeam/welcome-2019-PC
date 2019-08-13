<template>
    <div id="jiaoshi">
        <ul>
            <div class="nth"></div>
            <li v-for="(image,index) in images">
                <img class="img" :src="images[index]">
                <div class="info">
                    <span class="sp1">姓名:</span>
                    <p class="p1">{{name[index]}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'jiaoshi',
  data() {
    return {
      images: [
        require('../../../assets/img/Landscape/jiaoshi/img1.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img2.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img3.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img4.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img5.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img6.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img7.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img8.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img9.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img10.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img11.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img12.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img13.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img14.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img15.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img16.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img17.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img18.jpg'),
        require('../../../assets/img/Landscape/jiaoshi/img19.jpg'),
      ],
      name: [
        '陈褀褀', '付蔚', '高冬', '高非', '胡庆', '蒋青', '罗元', '闵绪国', '彭语良', '漆晶', '王睿', '王樱桃', '熊安萍', '袁帅', '张清华', '张琬悦', '郑继明', '周兴茂', '朱伟',
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
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
#jiaoshi {
    width: 890px;
    height: 600px;

}
ul {
    width: 897px;
    height: 778px;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: rgb(135, 166, 255);
    list-style: none;
    position: relative;
    left: 3px;
    top: -4px;
    li {
        margin-left: 9px;
        float: left;
        width: 274px;
        height: 201px;
        border: 2px solid rgb(57, 125, 218);
        margin-top: 20px;
        background-color: rgb(176, 207, 255);
        overflow: hidden;
        .img {
            float: left;
            position: relative;
            top: 15px;
            left: 10px;
            width: 250px;
            height: 152px;
            border: 2px solid rgb(1, 52, 199);
        }
        .info {
            position: relative;
            left: 100px;
            float: left;
            width: 220px;
            height: 250px;

        }
        span {
            font-size:16px;
            font-family: "微软雅黑";
            color: rgb(2, 49, 169);
        }
        p {
            font-size: 12px;
            font-family: "微软雅黑";
            color: rgb(70, 102, 163);
        }
        .p1 {
            position: relative;
            top: 25px;
            width: 200px;
            left: 10px;
        }
        .sp1 {
            float: left;
            position: relative;
            top: 20px
        }
        .sp2 {
            position: relative;
            right:40px ;
            top: 40px;
        }
        .p2 {
            float: left;
            font-size: 12px;
            height: 20px;
            width: 200px;
            font-family: "微软雅黑";
            position: relative;
            top: 50px
        }
    }
}
.nth {
    width: 100%;
    height: 150px;
}

</style>
