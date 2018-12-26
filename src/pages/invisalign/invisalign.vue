<template lang="pug" src="./invisalign.pug"></template>

<script>
export default {
  name: 'invisalign',
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    }
  }
}
</script>
