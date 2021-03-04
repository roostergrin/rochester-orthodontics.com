<template lang="pug" src="./new-patient-paperwork.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'new-patient-paperwork',
  computed: {
    props () {
      return this.$store.state.pages['new-patient-paperwork']
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
