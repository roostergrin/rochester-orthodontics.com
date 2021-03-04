<template lang="pug" src="./a-section-to-collect-patient-information.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'a-section-to-collect-patient-information',
  computed: {
    props () {
      return this.$store.state.pages['a-section-to-collect-patient-information']
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
