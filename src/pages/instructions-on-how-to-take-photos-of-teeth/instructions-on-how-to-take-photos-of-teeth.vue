<template lang="pug" src="./instructions-on-how-to-take-photos-of-teeth.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'instructions-on-how-to-take-photos-of-teeth',
  computed: {
    props () {
      return this.$store.state.pages['instructions-on-how-to-take-photos-of-teeth']
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
