<template lang='pug' src='./lazy-image.pug'></template>

<script>
import ErrorPng from '@/assets/error.png'

export default {
  props: {
    src: {
      type: Object,
      default () {
        return {
          url: ErrorPng,
          sizes: {
            medium: ErrorPng
          },
          alt: 'default image'
        }
      },
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
