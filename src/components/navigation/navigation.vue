<template lang="pug" src="./navigation.pug"></template>

<script>
export default {
  data () {
    return {
      active: false,
      linkActive: false
    }
  },
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
    }
  },
  methods: {
    toggleNav () {
      this.active = !this.active
      this.active ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  }
}
</script>
