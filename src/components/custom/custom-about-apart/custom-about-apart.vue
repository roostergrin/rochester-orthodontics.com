<template lang='pug' src='./custom-about-apart.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
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
      console.log(this.showing, this.content.slider.length - 2)
      if (this.showing >= this.content.slider.length - 3) {
        if (this.current >= this.content.slider.length - 1) {
          this.showing = 0
          this.current = 0
          console.log('both to zero')
        } else {
          this.current += 1
          console.log('current run')
        }
      } else {
        this.showing += 1
        this.current += 1
        console.log('both run')
      }
    }
  }
}
</script>
