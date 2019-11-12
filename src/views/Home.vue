<template>
  <div id="home" class="home">
    <NavBar :data="this.activeBlock"></NavBar>
    <!-- <TopHead></TopHead> -->
    <KVTyper title="Hi! I'm Zachary Zhuo"></KVTyper>

    <!-- <KV></KV> -->
    <div class="waypoint"
        v-waypoint="{ active: true, callback: logOne }" id="about">
      <AboutMe title="About Me."></AboutMe>
    </div>
    <div class="waypoint"
         v-waypoint="{ active: true, callback: logOne }" id="skill">
      <Skills title="Skills." subTitle="技術"></Skills>
    </div>
    <div class="waypoint"
         v-waypoint="{ active: true, callback: logOne }" id="work">
      <!-- <Works title="Work" subTitle="作品集"></Works> -->
    </div>

    <div class="section section-bg waypoint"
    v-waypoint="{ active: true, callback: logOne }" id="experienceandeducation">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ExperiencesList title="Experiences." subTitle="經歷"></ExperiencesList>
          </div>
          <div class="col-md-6">
            <Education title="Education." subTitle="學歷"></Education>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import KVTyper from '@/components/KVTyper.vue'
import AboutMe from '@/views/AboutMe.vue'
// import Skills from '@/components/Skills.vue'
// import Works from '@/components/Works.vue'
// import Education from '@/components/Education.vue'
// import ExperiencesList from '@/components/ExperiencesList.vue'
// import VueWaypoint from 'vue-waypoint'

import { WOW } from 'wowjs'

const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true
})
wow.init()

export default {
  name: 'home',
  components: {
    NavBar, KVTyper, AboutMe
  },
  metaInfo: {
    title: "Zachary's Vue",
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ]
  },
  data () {
    return {
      intersectionOptions: {
        root: document.querySelector('#app'),
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      },
      activeBlock: 'about'
    }
  },
  methods: {
    logOne ({ el, going, direction }) {
      let activeEl = el.getAttribute('id')
      if (going === 'in') {
        this.activeBlock = el.getAttribute('id')
        document.getElementById(activeEl).classList.add('active')
      }
      if (going === 'out') {
        document.getElementById(activeEl).classList.remove('active')
      }
    }
  }
}
</script>
