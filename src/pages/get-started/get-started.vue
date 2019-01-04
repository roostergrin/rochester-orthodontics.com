<template lang="pug" src="./get-started.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockFullWidth from 'components/block/block-full-width/block-full-width'

export default {
  name: 'get-started',
  computed: {
    props () {
      return this.$store.state.pages['get-started']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockSection,
    BlockFullWidth
  }
}
</script>
