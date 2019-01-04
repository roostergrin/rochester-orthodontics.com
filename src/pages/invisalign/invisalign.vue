<template lang="pug" src="./invisalign.pug"></template>

<script>
import BlockGradient from 'components/block/block-gradient/block-gradient'

export default {
  name: 'invisalign',
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    BlockGradient
  }
}
</script>
