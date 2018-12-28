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
      naturalWidth: null,
      naturalHeight: null,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      }
    }
  },
  mounted () {
    let intervalTime = setInterval(() => {
      if (this.$refs.image.naturalWidth > 0 && this.$refs.image.naturalHeight > 0 && this.$refs.image.naturalWidth !== undefined && this.$refs.image.naturalHeight !== undefined) {
        this.setSizing()
        clearInterval(intervalTime)
      }
    }, 100)
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.loaded = true
      }
    },
    setSizing () {
      this.width = this.$refs.container.clientWidth
      this.height = this.$refs.container.clientHeight
      this.naturalWidth = this.$refs.image.naturalWidth
      this.naturalHeight = this.$refs.image.naturalHeight
    }
  }
}
</script>
