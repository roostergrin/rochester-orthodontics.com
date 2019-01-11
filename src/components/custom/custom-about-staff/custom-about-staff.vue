<template lang='pug' src='./custom-about-staff.pug'></template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      active: null
    }
  },
  methods: {
    setActive (i) {
      this.active === i ? this.active = null : this.active = i
    }
  }
}
</script>
