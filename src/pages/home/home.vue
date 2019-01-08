<template lang="pug" src="./home.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockTiles from 'components/block/block-tiles/block-tiles'
import CustomHomeTestimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import Hero from 'components/hero/hero'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockSection,
    BlockTiles,
    CustomHomeTestimonials,
    CustomHomeWelcome,
    Hero
  }
}
</script>
