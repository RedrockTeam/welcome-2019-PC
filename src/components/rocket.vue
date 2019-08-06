<template>
<div class="totop">
    <div id="rocket"  @click="toTop()" ref="show" :class="{flash : flag}">
        <div class="rocket">
        </div>
        <div class="fire">
        </div>
    </div>
</div>
</template>


<script>
import {
  setTimeout, clearTimeout, setInterval, clearInterval,
} from 'timers';


export default {
  name: 'rocket',
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    toTop() {
      const timer = setInterval(() => {
        const speed = Math.floor(document.documentElement.scrollTop / 10)
        document.documentElement.scrollTop -= speed
        if (document.documentElement.scrollTop < 100) {
          clearInterval(timer)
        }
      }, 20)
    },
    show() {
      if (document.documentElement.scrollTop < 1500) {
        this.$refs.show.style.display = 'none'
      } else {
        this.$refs.show.style.display = 'inline'
      }
    },
    fly() {
      setTimeout(this.toTop, 1000)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.show)
  },

}
</script>


<style lang="scss">
.totop {
    position: fixed;
    z-index: 1;
    width: 1440px;
    height: 300px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;

}
.rocket {
    width: 103px;
    height: 166px;
    background: url("../assets/img/Rocket/rocket.png");
    margin-bottom: -8px;


}
.fire {
    width: 103px;
    height: 97px;
    background: url("../assets/img/Rocket/fire.png");

}
#rocket {
    cursor: pointer;
    position: absolute;;
    bottom: 70px;
    width: 103px;
    height: 170px;
    z-index: 2;
    right: 100px;
}
#rocket:hover {
    .fire {
        animation: fireMove 1S infinite;
    }
}
.flash {
    animation: fly 0.5S ;
}

@keyframes fireMove {
    0% {
        position: relative;
        bottom: 0px;
    }
    50% {
        position: relative;
        bottom: -10px
    }
    100% {
        position: relative;
        bottom: 0px
    }
}
@keyframes fly {
    form {
        bottom : 70px
    }
    to {
        bottom : 1070px;
    }
}


</style>
