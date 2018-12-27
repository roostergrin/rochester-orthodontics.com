import Vue from 'vue'
import Icon from 'components/global/icon/icon'
import LazyImage from 'components/global/lazy-image/lazy-image'
import Column from 'components/global/column/column'
import Container from 'components/global/container/container'
import Trigger from 'components/global/trigger/trigger'
import NavTrigger from 'components/global/nav-trigger/nav-trigger'
import Loader from 'components/global/loader/loader'

const components = () => {
  Vue.component('Column', Column)
  Vue.component('Container', Container)
  Vue.component('Icon', Icon)
  Vue.component('LazyImage', LazyImage)
  Vue.component('Loader', Loader)
  Vue.component('NavTrigger', NavTrigger)
  Vue.component('Trigger', Trigger)
}

export default components()
