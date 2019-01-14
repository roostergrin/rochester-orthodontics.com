<template lang='pug' src='./block-section.pug'></template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default () {
        return null
      }
    },
    alt: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      active: false,
      showModal: false,
      current: 0,
      showing: 0,
      shifting: false,
      slideWidth: null,
      slides: null
    }
  },
  mounted () {
    let modalInterval = setInterval(() => {
      if (this.content.modal !== undefined) {
        this.slides = this.content.modal.length
        clearInterval(modalInterval)
      }
    }, 100)
  },
  methods: {
    switchSlide () {
      if (this.showing >= this.content.modal.length - 3) {
        if (this.current >= this.content.modal.length - 1) {
          this.showing = 0
          this.current = 0
        } else {
          this.current += 1
        }
      } else {
        this.showing += 1
        this.current += 1
      }
    },
    toggleModal () {
      this.showModal = !this.showModal
      this.showModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
      if (this.showModal) {
        setTimeout(() => {
          this.slideWidth = this.$refs.slider.clientWidth / 3
        }, 100)
      }
    }
  }
}
</script>
