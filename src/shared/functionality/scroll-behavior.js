import VueScrollTo from 'vue-scrollto'

const scrollBehavior = function (to, from) {
  if (to.hash) {
    window.scrollTo(0, 0)
    VueScrollTo.scrollTo(to.hash, { offset: -150, easing: 'ease-in', duration: 1500 })
  } else {
    return { x: 0, y: 0 }
  }
}

export default scrollBehavior
