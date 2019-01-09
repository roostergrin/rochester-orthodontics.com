<template lang="pug" src="./contact.pug"></template>

<script>
import CustomContactPage from 'components/custom/custom-contact-page/custom-contact-page'
import Hero from 'components/hero/hero'

export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages.contact
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    CustomContactPage,
    Hero
  }
}
</script>
