<template lang="pug" src="./contact.pug"></template>

<script>
export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  }
}
</script>
