<template lang="pug" src="./oral-hygiene.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'oral-hygiene',
  computed: {
    props () {
      return this.$store.state.pages['oral-hygiene']
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
