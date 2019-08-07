<template>
  <div></div>
</template>

<script>
export default {
  props: {
    isFire: Boolean,
  },
  mounted() {
    this.bg = this.$parent.$refs.bg
    this.bg.addEventListener('mouseover', this.fire)
    this.bg.addEventListener('mouseout', this.fire)
  },
  beforeDestroy() {
    this.bg.removeEventListener('mouseover', this.fire)
    this.bg.removeEventListener('mouseout', this.fire)
  },
  methods: {
    fire() {
      this.$emit('on-fire')
    },
  },
}
</script>
