<template lang="pug" src="./about.pug"></template>

<script>
import BlockFullWidth from 'components/block/block-full-width/block-full-width'
import CustomAboutDoctor from 'components/custom/custom-about-doctor/custom-about-doctor'
import CustomAboutStaff from 'components/custom/custom-about-staff/custom-about-staff'
import CustomAboutApart from 'components/custom/custom-about-apart/custom-about-apart'
import Hero from 'components/hero/hero'

export default {
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.about
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockFullWidth,
    CustomAboutApart,
    CustomAboutDoctor,
    CustomAboutStaff,
    Hero
  }
}
</script>
