<template>
    <div id="yingxinhuodong">
        <title1 class="title">迎新活动</title1>
        <div class="bg">
            <div class="content">
                <p class="left">
                    萌新你好，欢迎来鲜肉集中营报道！听说这里有好多萌新的照片，快来为你的班级注入萌新能量，美好的大学生活从认识新同学开始~
                </p>
                <button1 class="buttonL">了解更多</button1>
            </div>
            <div class="content">
                <p class="right">
                    萌新你好，欢迎来鲜肉集中营报道！听说这里有好多萌新的照片，快来为你的班级注入萌新能量，美好的大学生活从认识新同学开始~
                </p>
                <button1 class="buttonR">了解更多</button1>
            </div>
        </div>
    </div>
</template>


<script>
import Title from '../Title'
import Button from '../Button'

export default {
  name: 'yingxinhuodong',
  components: {
    title1: Title,
    button1: Button,
  },
}
</script>


<style lang="scss" >
.bg {
    width: 1083px;
    height: 521px;
    position: relative;
    top: 12px;
    left: 36px;
    margin: 0 auto;
    background: url("../../assets/img/Yingxinhuodong/yxhdBG.png");
    .content {
        position: relative;
        right: 140px;
        top: 380px;
        float: left;
        margin-left: 220px;
        .right {
            height: 55px;
            font-size: 12px;
            width: 318px;
            overflow: hidden;
            font-family: "宋体";
            color: white;
        }
        .left {
            height: 50px;
            overflow: hidden;
            margin-left: -10px;
            font-size: 12px;
            width: 318px;
            font-family: "宋体";
            color: white;
        }
        .buttonR {
            margin-left:90px;
            margin-top: 15px;

        }
        .buttonL {
            margin-left:80px;
            margin-top: 20px;

        }
    }

}
.title {
    position: relative;
    left: 20px;
}


</style>
