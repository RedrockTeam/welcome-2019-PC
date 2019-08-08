<template>
    <div id="title">

        <p><slot></slot></p>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    content: "",
  },
}
</script>


<style lang="scss" scoped>
#title {
    margin:  0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: white;
    width: 309px;
    height: 114px;
    background-image: url(../assets/img/Title/Title.png);
    p {
        position: relative;
        top:-10px;
    }

}

</style>
