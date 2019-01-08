<template lang="pug" src="./treatments.pug"></template>

<script>
import BlockFullWidth from 'components/block/block-full-width/block-full-width'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import BlockSection from 'components/block/block-section/block-section'
import BlockTiles from 'components/block/block-tiles/block-tiles'
import Hero from 'components/hero/hero'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockFullWidth,
    BlockGradient,
    BlockSection,
    BlockTiles,
    Hero
  }
}
</script>
