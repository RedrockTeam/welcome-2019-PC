<template>
    <div id="junxunteji">
        <title1 class="title">军训特辑</title1>
        <div class="bg">
            <ul>
                <li>
                    <img class="img" src="../../assets/img/Junxunteji/img1.png">
                    <p>军训锻炼的是胆量和意识，但也别折了身体。</p>
                    <button1 class="button">军训贴士</button1>
                </li>
                <li>
                    <img class="img" src="../../assets/img/Junxunteji/img2.png">
                    <p>立正，稍息，正步走，各司其职。消防，手语，大汇报。</p>
                    <button1 class="button">训练内容</button1>
                </li>
                <li>
                    <img class="img" src="../../assets/img/Junxunteji/img3.png">
                    <p>迈着矫健的步伐，挺拔的身姿，跑道上留下他们勇往直前的足迹。</p>
                    <button1 class="button">历年视频</button1>
                </li>
                <li>
                    <img class="img" src="../../assets/img/Junxunteji/img4.png">
                    <p>以军人的标准严格要求自己，别开生面“开学第一课”。</p>
                    <button1 class="button">军训纪律</button1>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import Title from '../Title'
import Button from '../Button'

export default {
  name: 'junxunteji',
  components: {
    title1: Title,
    button1: Button,
  },
}
</script>


<style lang="scss" scoped>
.bg {
    position: relative;
    top: 12px;
    margin: 0 auto;
    left:-11px;
    width: 1116px;
    height: 440px;
    background: url("../../assets/img/Junxunteji/jxtjBG.png");
}
ul {
    position: absolute;
    left: 89px;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
        height: 295px;
        width: 181px;
        float: left;
        margin-left: 52px;
        p {
            position: relative;
            top: 130px;
            width: 181px;
            height: 40px;
            overflow: hidden;
            font-size: 12px;
            font-family: "宋体";
            color: white;
        }
        .img {
            position: relative;
            left: 5px;
            top: 110px;
            width: 172px;
            height: 175px;
        }
        .button {
            position: relative;
            top: 150px;
            left: 25px;
        }
    }


}
.title {
    position: relative;
    left: 40px;
}
</style>
