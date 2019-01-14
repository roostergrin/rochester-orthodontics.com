<template lang='pug' src='./custom-about-apart.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      active: null,
      current: 0,
      showing: 0,
      shifting: false,
      slideWidth: null,
      slides: this.content.slider.length
    }
  },
  mounted () {
    this.slideWidth = this.$refs.slider.clientWidth / 3
  },
  methods: {
    switchSlide () {
      if (this.showing >= this.content.slider.length - 3) {
        if (this.current >= this.content.slider.length - 1) {
          this.showing = 0
          this.current = 0
        } else {
          this.current += 1
        }
      } else {
        this.showing += 1
        this.current += 1
      }
    }
  }
}
</script>
