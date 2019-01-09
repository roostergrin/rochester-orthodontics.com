<template lang='pug' src='./loader.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      loaded: false,
      animate: false
    }
  },
  mounted () {
    let isLoading = setInterval(() => {
      if (!this.$store.state.loading) {
        setTimeout(() => {
          this.animate = true
        }, 500)
        setTimeout(() => {
          this.loaded = true
        }, 1750)
        clearInterval(isLoading)
      }
    }, 100)
  }
}
</script>
