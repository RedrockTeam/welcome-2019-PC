<template>
    <div id="youzigonglue">
        <title1 class="title" style="left:-10px">邮子攻略</title1>
        <div class="bg1">
            <ul>
                <li class="li1">
                    <span>新生清单</span>
                    <p>大学新生报道必备清单尽快启程新生活</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li2">
                    <span>交通路线</span>
                    <p>交通路线四通八达，终汇重邮</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li3">
                    <span>周边生活</span>
                    <p>汇总周边美食，集结生活信息</p>
                    <button1 class="btn">了解更多</button1>
                </li>
                <li class="li4">
                    <span>网址大全</span>
                    <p>你想要的我都“邮”，通往各网站的窗口</p>
                    <button1 class="btn">了解更多 </button1>
                </li>
            </ul>
        </div>

    </div>
</template>


<script>
import Title from '../Title'
import Button from '../Button'

export default {
  name: 'youzigonglue',
  components: {
    title1: Title,
    button1: Button,
  },
}
</script>


<style lang="scss" scoped>
#youzigonglue {
    margin:  0 auto;

}
.bg1 {
    width: 1117px;
    height: 406px;
    background-image: url("../../assets/img/Youzigonglue/yzglBG.png");
    position: relative;
    left: 180px;
}
ul {
    list-style: none;
    position: relative;
    top: 300px;
    right: 75px;
    li {
        float: left;
        text-align: center;
        .btn {
            position: absolute;
            top: 10px;
            margin-top: 10px;
            margin-left: 25px;
        }
    }
    .li1 {
        margin-left: 75px;
        margin-top: -50px;
    }
    .li2 {
        margin-left: 50px;
        margin-top: -50px;
    }
    .li3 {
        margin-left: 50px;
        margin-top: -50px;
    }
    .li4 {
        margin-left: 50px;
        margin-top: -50px;
    }
    span {

        text-align: center;
        font-family: "微软雅黑";
        font-size: 18px;
        color: white;

    }
    p {
        height: 20px;
        width: 181px;
        font-size: 12px;
        font-family: "宋体";
        color: white;
    }
}


</style>
