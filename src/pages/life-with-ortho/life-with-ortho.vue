<template lang="pug" src="./life-with-ortho.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'life-with-ortho',
  computed: {
    props () {
      return this.$store.state.pages['life-with-ortho']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockSection,
    BlockGradient,
    Hero
  }
}
</script>
