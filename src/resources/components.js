import Vue from 'vue'
import Icon from 'components/global/icon/icon'
import Column from 'components/global/column/column'
import Container from 'components/global/container/container'
import Trigger from 'components/global/trigger/trigger'
import NavTrigger from 'components/global/nav-trigger/nav-trigger'
import Loader from 'components/global/loader/loader'

const components = () => {
  Vue.component('Icon', Icon)
  Vue.component('Column', Column)
  Vue.component('Container', Container)
  Vue.component('Trigger', Trigger)
  Vue.component('NavTrigger', NavTrigger)
  Vue.component('Loader', Loader)
}

export default components()
