<template lang="pug" src="./treatments.pug"></template>

<script>
export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  mounted () {
    console.log(this.$store.state.pages)
  }
}
</script>
