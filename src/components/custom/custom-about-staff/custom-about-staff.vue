<template lang='pug' src='./custom-about-staff.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      activeBio: null,
      active: null
    }
  },
  methods: {
    setActive (i) {
      this.activeBio === i ? this.activeBio = null : this.activeBio = i
    }
  }
}
</script>
