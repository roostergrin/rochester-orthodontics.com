<template lang='pug' src='./custom-home-testimonials.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      active: 0,
      slideActive: 0
    }
  },
  methods: {
    changeSlide (i) {
      this.slideActive = i
    }
  }
}
</script>
