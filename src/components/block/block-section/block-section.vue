<template lang='pug' src='./block-section.pug'></template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default () {
        return null
      }
    },
    alt: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>
