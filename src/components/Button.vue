<template>
    <div id="button">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: ,
  },
}
</script>


<style lang="scss" scoped>
#button {
    font-size: 20px;
    color: rgb(22, 69, 169);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 133px ;
    height: 48px ;
    background: url(../assets/img/Button/button.png);
    cursor: pointer;

}
#button:hover {
    background-image: url(../assets/img/Button/buttonHover.png);
    color: white;

}
</style>
