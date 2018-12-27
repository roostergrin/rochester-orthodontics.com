<template lang='pug' src='./lazy-image.pug'></template>

<script>
export default {
  props: {
    loSrc: {
      type: String,
      default: '@/assets/error.png',
      required: true
    },
    highSrc: {
      type: String,
      default: '@/assets/error.png',
      required: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    }
  },
  data () {
    return {
      loaded: false,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.$refs)
    }, 500)
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.loaded = true
      }
    }
  }
}
</script>
