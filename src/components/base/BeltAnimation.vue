<template>
  <div class="road">
      <div class="car1 car">
      </div>
      <div class="car2 car">
      </div>
      <div class="car3 car">
      </div>
      <div class="car4 car">
      </div>
      <div class="car5 car">
      </div>
  </div>
</template>

<style scoped lang="scss">
.road {
    height: 100px;
    width: 980px;
    position: relative;
    .car {
        float: left;
        background-color: rgb(120, 155, 255);
        width: 54px;
        height: 16px;
        position: absolute;
        top: 10px;
        animation: car 7.5s linear infinite;
        left: 0;
    }
    .car2 {
        animation-delay: 1.5s;
    }
    .car3 {
        animation-delay: 3s;
    }
    .car4 {
        animation-delay: 4.5s;
    }
    .car5 {
        animation-delay: 6s;
    }
}
@keyframes car {
    0% {
        top: 0.7vw;
        left: 0;
        transform: rotate(0deg);
    }
    80% {
        top: 0.7vw;
        left: 46.4vw;
        transform: rotate(0deg);
    }
    85% {
        top: 0.7vw;
        left: 46.8vw;
        transform: rotate(45deg);
    }
    90% {
        top: 1.4vw;
        left: 47.36vw;
        transform: rotate(90deg);
    }
    95% {
        top: 5.6vw;
        left: 47.9vw;
        transform: rotate(90deg);
    }
    98% {
        top: 5.6vw;
        left: 0;
        transform: rotate(0deg);
    }
    100% {
        top: 0.7vw;
        left: 0;
        transform: rotate(0deg);
    }
}
</style>
