<template lang="pug" src="./navigation-desktop.pug"></template>

<script>
export default {
  computed: {
    links () {
      return this.$router.options.routes
    },
    content () {
      return this.$store.state.app.navigation
    }
  }
}
</script>
