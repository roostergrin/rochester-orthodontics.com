<template lang="pug" src="./get-started.pug"></template>

<script>
export default {
  name: 'get-started',
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    }
  }
}
</script>
