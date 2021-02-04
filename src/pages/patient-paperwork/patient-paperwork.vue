<template lang="pug" src="./get-started.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockFullWidth from 'components/block/block-full-width/block-full-width'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'patient-paperwork',
  computed: {
    props () {
      return this.$store.state.pages['patient-paperwork']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockSection,
    BlockFullWidth,
    BlockGradient,
    Hero
  }
}
</script>
