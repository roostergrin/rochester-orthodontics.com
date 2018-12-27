<template lang="pug" src="./home.pug"></template>

<script>
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    CustomHomeWelcome
  }
}
</script>
