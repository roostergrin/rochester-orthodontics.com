<template lang="pug" src="./get-started.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockFullWidth from 'components/block/block-full-width/block-full-width'
import BlockGradient from 'components/block/block-gradient/block-gradient'

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
    BlockFullWidth,
    BlockGradient
  }
}
</script>
