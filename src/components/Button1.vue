<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Button1',
  props: {
    content: "",
  },
}
</script>


<style lang="scss" scoped>
.button {
  font-size: 20px;
  color: rgb(22, 69, 169);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 186px ;
  height: 60px ;
  background: url(../assets/img/Button/button1.png);
  cursor: pointer;
}
.button:hover {
    background-image: url(../assets/img/Button/button1Hover.png);
    color: white;
}
</style>
