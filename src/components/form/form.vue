<template lang='pug' src='./form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      firstName: '',
      lastName: '',
      clientPhone: '',
      clientEmail: '',
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
          console.log(e)
        })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        firstName: this.firstName,
        lastName: this.lastName,
        clientPhone: this.clientPhone,
        clientEmail: this.clientEmail
      })
        .then(res => {
          this.formSuccess = true
          console.log('success')
          setTimeout(() => {
            this.formSubmitted = false
            console.log('reset')
          }, 500)
          this.firstName = ''
          this.lastName = ''
          this.clientPhone = ''
          this.clientEmail = ''
        })
        .catch(e => { console.log(e) })
    }
  }
}
</script>
