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
      width: null,
      height: null,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      }
    }
  },
  mounted () {
    this.width = this.$refs.image.clientWidth
    this.height = this.$refs.image.clientHeight
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
