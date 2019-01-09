<template lang="pug" src="./form.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      fullName: '',
      clientPhone: '',
      clientEmail: '',
      message: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e, 'validate')
        })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        fullName: this.fullName,
        clientPhone: this.clientPhone,
        clientEmail: this.clientEmail
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            this.formSubmitted = false
          }, 1500)
          this.fullName = ''
          this.clientPhone = ''
          this.clientEmail = ''
          this.message = ''
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
