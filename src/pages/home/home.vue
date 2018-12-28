<template lang="pug" src="./home.pug"></template>

<script>
import BlockSection from 'components/block/block-section/block-section'
import BlockTiles from 'components/block/block-tiles/block-tiles'
import CustomHomeTestimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'

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
    CustomHomeWelcome
  }
}
</script>
