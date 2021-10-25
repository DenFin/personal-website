<template>
  <section id="work" class="works panel">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <section-headline headline="Arbeiten" color="turqoise"></section-headline>
              </div>
          </div>
          <div class="row" v-if="works">
              <work-item :work="work" v-for="work in works.data" :key="work.id" ></work-item>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

import SectionHeadline from '../../components/global/SectionHeadline.vue'
import WorkItem from "../../components/work/WorkItem"


export default {
  components: { SectionHeadline, WorkItem },
  data(){
      return {
          works: [],
      }
  },
  methods: {
    parallax() {
        gsap.to('.work-item:nth-of-type(1)', {
            ease: "none",
            scrollTrigger: {
                trigger: "#work",
                start: "center center",
                scrub: true
                },
                y: 250
            }
        )

        gsap.to('.arrow-2', {
            ease: "none",
            scrollTrigger: {
                trigger: "#start",
                start: "center center",
                scrub: true
                },
                y: 100
            }
        )

    }  
  },
  mounted(){
      this.parallax()
  },
  async created() {
    this.works  = await axios.get('https://www.dennisfink.de/dennisfink.de/wp-json/wp/v2/projekte')
    }
    


}
</script>

<style lang="sass">

</style>