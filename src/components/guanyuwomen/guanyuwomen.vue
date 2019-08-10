<template>
    <div id="guanyuwomen">
        <title1>关于我们</title1>
        <div class="bg">
            <div class="left">
            </div>
            <div class="right">
                <article> 重庆邮电大学红岩网校工作站是一个校园互联网开发学生团队。该团队自2000年创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。红岩网校工作站在校团委老师的指导下，由学生自我管理，多年来走出了一大批优秀的IT人才，深受电信运营商和BAT等知名互联网企业的青睐。团队先后获评“全国五四红旗团支部”“团中央新媒体专业工作室”“重庆市IT杰出青年群体”等
                    系列荣誉。</article>
                <button1 class="button">了解更多</button1>
            </div>
        </div>
    </div>
</template>


<script>
import Title from '../Title'
import Button from '../Button'

export default {
  name: 'guanyuwomen',
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
    left: -56px;
    margin: 0 auto;
    width: 1136px;
    height: 422px;
    background: url("../../assets/img/Guanyuwomen/guanyuwomen.png");
    div {
        float: left;
    }
}
.left {
    width: 223px;
    height: 208px;
    background-color: antiquewhite;
    position: relative;
    top: 112px;
    left: 280px;
    background-image: url(../../assets/img/Guanyuwomen/img1.png)
}
.right {
    position: relative;
    left: 352px;
    top: 115px;
    width: 455px;
    line-height: 24px;
    article {
        height: 100px;
        overflow: hidden;
        text-indent: 20px;
        position: relative;
        height: 150px;
        width: 456px;
        font-size: 12px;
        font-family: "宋体";
        color: white;
    }
    .button {
        float: right;
        margin-top: 20px;
    }
}
</style>
