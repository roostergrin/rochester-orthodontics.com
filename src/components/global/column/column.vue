<template lang='pug' src='./column.pug'></template>

<script>
export default {
  props: {
    off: {
      type: Number,
      default: 0
    },
    cols: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      gutter: 30,
      columns: this.cols + this.off,
      offset: null,
      screens: {
        screenXs: 768,
        screenSm: 992,
        screenMd: 1024,
        screenLg: 1200,
        screenXl: 1560
      }
    }
  },
  mounted () {
    this.offset = this.setOffset()
    window.addEventListener('resize', () => {
      if (window.outerWidth >= this.screens.screenMd) {
        this.offset = this.setOffset()
      } else {
        this.offset = 0
      }
    })
  },
  methods: {
    setOffset () {
      if (this.$refs.width !== undefined) {
        let width = this.$refs.width.clientWidth
        if (window.outerWidth >= this.screens.screenMd) {
          return width * (this.off / this.columns) + this.gutter * (this.off / this.columns) + 'px'
        } else {
          return 0
        }
      } else {
        return 0
      }
    }
  }
}
</script>
