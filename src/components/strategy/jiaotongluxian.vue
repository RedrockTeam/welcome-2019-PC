<template>
    <div id="jiaotongluxian">
        <div id="bg">
            <div class="content">
                <ul>
                    <li class="topic">
                        <p class="p1">出发地</p>
                        <p class="p2">预计时间</p>
                        <p class="p3">预计价格</p>
                        <p class="p4">乘车路线</p>
                    </li>
                    <li>
                        <p class="pp1">重庆江北机场：(距离学校约40公里)</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">70元</p>
                        <p class="pp4">可乘机场大巴至上清寺后转乘108路公交车至南坪，再转乘346或347路公交车到学校；或乘轻轨三号线到南坪，再转乘346或347路公交车到学校；直接打车到校费用约为70元</p>
                    </li>
                    <li>
                        <p class="pp1">龙头寺火车站、重庆北站（距离学校约20公里）：</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">40元</p>
                        <p class="pp4">乘323路或168路公交车至南坪，转乘346或347路公交车至学校：或乘轻轨三号线到南坪，再转乘346或347路公交车到学校；直接打车到校费用约40元</p>
                    </li>
                    <li>
                        <p class="pp1">菜园坝火车站、汽车站（距离学校约12公里）：</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">25元</p>
                        <p class="pp4">可在菜园坝广场乘347路公交车至学校；直接打车到校费用约为25元；</p>
                    </li>
                    <li>
                        <p class="pp1">重庆西站（距离学校约25公里）：</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">70元</p>
                        <p class="pp4">1.可乘213路公交车到天星桥，转乘819路公交车至会展中心，再转乘346路公交车到学校2.可乘426路公交车到南坪红星美凯龙，再转乘347路公交车到学校3.直接打车到校费用约为70元</p>
                    </li>
                    <li>
                        <p class="pp1">朝天门码头（距离学校约9公里）：</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">20元</p>
                        <p class="pp4">可乘车至南坪后转乘346或347路公交车至学校；直接打车到校费用约为20元。</p>
                    </li>
                    <li>
                        <p class="pp1">崇文路2号（距离学校0公里）：</p>
                        <p class="pp2">60分钟</p>
                        <p class="pp3">1元</p>
                        <p class="pp4">1.可乘坐校内观光车到教学楼、宿舍楼等2.每人需自备一元现金车票</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import button1 from "../Button1"
export default {
    name: "jiaotongluxian",
    components: {
        button1,
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    li {
        margin-top: 23px;
        width: 856px;
        height: 81px;
        background-color: rgb(176, 207, 255);
        border: 3px solid rgb(57, 125, 218);
        display: flex;
        align-items: center;
        p {
            float: left;
        }
        .pp1 {
            font-size: 16px;
            font-family: '微软雅黑';
            color: rgb(58, 96, 207);
            width: 170px;
        }
        .pp2 {
            font-size: 16px;
            font-family: '微软雅黑';
            color: rgb(76, 117, 234);
            width: 100px;
            margin-left: 40px;
        }
        .pp3 {
            font-size: 14px;
            color: rgb(235, 92, 107);
            width: 100px;
            margin-left: 80px;
        }
        .pp4 {
            font-size: 14px;
            font-family: '微软雅黑';
            color: rgb(76, 117, 234);
            width: 400px;
            margin-left: 60px;
        }
    }
}
#bg {
    position: relative;
    left: 137px;
    top: 42px;
    width: 1117px;
    height: 666px;
    background-image: url(../../assets/img/Strategy/jiaotongluxian/jtlxBG.png)
}
.content {
    width: 900px;
    height: 580px;
    position: relative;
    top: 75px;
    left: 140px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
}

.topic {
    width: 856px;
    height: 38px;
    background-color: rgb(176, 207, 255);
    border: 3px solid rgb(57, 125, 218);
    margin-top: 31px;
    font-size: 18px;
    color: rgb(0, 54, 215);
    display: flex;
    align-items: center;
    
    p {
        float: left;        
    }
    .p1 {
        position: absolute;
        left: 40px;
    }
    .p2 {
        margin-left: 180px
    }
    .p3 {
        margin-left: 88px;
    }
    .p4 {
        margin-left: 200px;
    }
}








.content::-webkit-scrollbar { width: 17px;}
.content::-webkit-scrollbar-thumb {
    background-image: url(../../assets/img/Scroll/huakuai.png);
    background-size: cover;
}
.content::-webkit-scrollbar-button {
    height: 16px;
    background-image: url(../../assets/img/Scroll/arrowUp.png);   
    background-repeat: no-repeat;
}
.content::-webkit-scrollbar-track { 
    background-image: url(../../assets/img/Scroll/rail.png);
}
</style>


