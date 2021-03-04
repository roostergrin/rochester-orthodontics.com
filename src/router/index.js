import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import Treatments from '@/pages/treatments/treatments'
import About from '@/pages/about/about'
import Invisalign from '@/pages/invisalign/invisalign'
import GetStarted from '@/pages/get-started/get-started'
import Newpatientpaperwork from '@/pages/new-patient-paperwork/new-patient-paperwork'
import CommunityOutreach from '@/pages/community-outreach/community-outreach'
import MeetTheRoTeam from '@/pages/meet-the-ro-team/meet-the-ro-team'
import OurMission from '@/pages/our-mission/our-mission'
import lifeWithOrtho from '@/pages/life-with-ortho/life-with-ortho'
import Emergencies from '@/pages/emergencies/emergencies'
import OralHygiene from '@/pages/oral-hygiene/oral-hygiene'
import Retainers from '@/pages/retainers/retainers'
import Testimonials from '@/pages/testimonials/testimonials'
import ASectionToCollectPatientInformation from '@/pages/a-section-to-collect-patient-information/a-section-to-collect-patient-information'
import Contact from '@/pages/contact/contact'
import PatientResources from '@/pages/patient-resources/patient-resources'
import VirtualConsultation from '@/pages/virtual-consultation/virtual-consultation'
import InstructionsOnHowToTakePhotosOfTeeth from '@/pages/instructions-on-how-to-take-photos-of-teeth/instructions-on-how-to-take-photos-of-teeth'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import Styleguide from '@/pages/styleguide/styleguide'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: Home
    },
    {
      path: '/get-started',
      name: 'Get Started!',
      navigation: true,
      component: GetStarted
    },
    {
      path: '/new-patient-paperwork',
      name: 'Newpatientpaperwork',
      navigation: true,
      component: Newpatientpaperwork
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: About
    },
    {
      path: '/meet-the-ro-team',
      name: 'meet-the-ro-team',
      navigation: true,
      component: MeetTheRoTeam
    },
    {
      path: '/community-outreach',
      name: 'community-outreach',
      navigation: true,
      component: CommunityOutreach
    },
    {
      path: '/our-mission',
      name: 'our-mission',
      navigation: true,
      component: OurMission
    },
    {
      path: '/life-with-ortho',
      name: 'life-with-ortho',
      navigation: true,
      component: lifeWithOrtho
    },
    {
      path: '/emergencies',
      name: 'emergencies',
      navigation: true,
      component: Emergencies
    },
    {
      path: '/oral-hygiene',
      name: 'oral-hygiene',
      navigation: true,
      component: OralHygiene
    },
    {
      path: '/retainers',
      name: 'retainers',
      navigation: true,
      component: Retainers
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      navigation: true,
      component: Testimonials
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      navigation: true,
      component: Invisalign
    },
    {
      path: '/a-section-to-collect-patient-information',
      name: 'a-section-to-collect-patient-information',
      navigation: true,
      component: ASectionToCollectPatientInformation
    },
    {
      path: '/instructions-on-how-to-take-photos-of-teeth',
      name: 'instructions-on-how-to-take-photos-of-teeth',
      navigation: true,
      component: InstructionsOnHowToTakePhotosOfTeeth
    },
    {
      path: '/patient-resources',
      name: 'patient-resources',
      navigation: true,
      component: PatientResources
    },
    {
      path: '/virtual-consultation',
      name: 'virtual-consultation',
      navigation: true,
      component: VirtualConsultation
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      component: Contact
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/patient-portal',
      beforeEnter () {
        window.open('https://patient.sesamecommunications.com/rochesterortho/index.html', '_blank')
      },
      name: 'Patient Portal',
      navigation: true
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  if (from.path !== to.path) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
