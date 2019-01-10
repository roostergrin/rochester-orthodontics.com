<template lang='pug' src='./custom-contact-page.pug'></template>

<script>
import MainForm from 'components/form/form'

export default {
  props: ['content'],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
      this.showModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
      if (this.showModal) {
        setTimeout(() => {
          this.slideWidth = this.$refs.slider.clientWidth / 3
        }, 100)
      }
    }
  },
  components: {
    MainForm
  }
}
</script>
