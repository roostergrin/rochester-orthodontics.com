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
  },
  watch: {
    '$store.state.route': function () {
      this.$store.dispatch('VIEW_NAV', false)
      console.log(this.$store.state.nav, this.$store.state)
    }
  }
}
</script>
