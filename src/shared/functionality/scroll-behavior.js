import VueScrollTo from 'vue-scrollto'

const scrollBehavior = function (to, from) {
  if (to.hash) {
    VueScrollTo.scrollTo(to.hash, { offset: -150, easing: 'ease-in-out' })
  } else {
    return { x: 0, y: 0 }
  }
}

export default scrollBehavior
