<template>
    <div id="footer">
        <div class="car">
        </div>
        <div class="content">
            <p>
              <a href="https://redrock.team/aboutus/" target="block">
                关于红岩网校
              </a> | <a href="mailto:web@redrock.team" target="block">
                指出错误
              </a>
            </p>
            <p>本网站由红岩网校工作站负责开发，管理，不经红岩网校委员会书面同意，不得进行转载</p>
            <p>地址：重庆市南岸区崇文路2号（重庆邮电大学内）400065
              <a href="https://redrock.team/aboutus/" target="block">
                E-mail: redrock@cqupt.edu.cn (023-62461084)
              </a>
            </p>
        </div>
    </div>
</template>


<script>


export default {
  name: 'Myfooter',
}
</script>


<style lang="scss" scoped>
#footer {
    margin: 0 auto;
    width: 1440px;
    height: 285px;
    background: url(../../assets/img/Footer/footerBG.png) no-repeat;
    background-size: 100% 100%;
}
.car {
    width: 90px;
    height: 38px;
    position: relative;
    left: 960px;
    background-image: url(../../assets/img/Footer/car.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: carMove 6s infinite;
}
.content {
    font-size: 12px;
    font-family: "宋体";
    color: white;
    text-align: center;
    position: relative;
    top:153px;
    line-height: 25px;
    a {
      color: #fff;
    }
}
@keyframes carMove {
    0% {
    width: 4vw;
        background-image: url(../../assets/img/Footer/carHead.png);
        background-position: center;
        background-size: 100% 100%;
        position: relative;
        left: 67vw;
    }
    5% {
    width: 6vw;
        background-image: url(../../assets/img/Footer/car.png);
        /* transform: rotateY(180deg); */
        background-position: center;
  background-size: 100% 100%;
        position: relative;
        left: 67vw;
    }
    45% {
      width: 6vw;
      background-image: url(../../assets/img/Footer/car.png);
      transform: rotate(0deg);
      background-position: center;
      background-size: 100% 100%;
      position: relative;
      left: 25vw;
    }
    50% {
      width: 4vw;
        position: relative;
        left: 25vw;
        background-image: url(../../assets/img/Footer/carHead.png);
      transform: rotate(0deg);
        background-position: center;
  background-size: 100% 100%;
    }
    55% {
      width: 6vw;
        position: relative;
        left: 25vw;
        background-image: url(../../assets/img/Footer/car.png);
        transform: rotateY(180deg);
        background-position: center;
  background-size: 100% 100%;
    }
    95% {
      width: 6vw;
        position: relative;
        left: 67vw;
        background-image: url(../../assets/img/Footer/car.png);
        transform: rotateY(180deg);
        background-position: center;
  background-size: 100% 100%;
    }
    100% {
      width: 4vw;
        background-image: url(../../assets/img/Footer/carHead.png);
        background-position: center;
  background-size: 100% 100%;
        position: relative;
        left: 67vw;
    }
}


</style>
