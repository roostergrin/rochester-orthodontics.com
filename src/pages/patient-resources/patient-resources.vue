<template lang="pug" src="./patient-resources.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'

export default {
  name: 'patient-resources',
  computed: {
    props () {
      return this.$store.state.pages['patient-resources']
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
