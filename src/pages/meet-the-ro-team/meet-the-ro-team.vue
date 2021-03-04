<template lang="pug" src="./meet-the-ro-team.pug"></template>

<script>
import BlockFullWidth from 'components/block/block-full-width/block-full-width'
import BlockGradient from 'components/block/block-gradient/block-gradient'
import Hero from 'components/hero/hero'
import CustomAboutStaff from 'components/custom/custom-about-staff/custom-about-staff'

export default {
  name: 'meet-the-ro-team',
  computed: {
    props () {
      return this.$store.state.pages['meet-the-ro-team']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockFullWidth,
    BlockGradient,
    Hero,
    CustomAboutStaff
  }
}
</script>
