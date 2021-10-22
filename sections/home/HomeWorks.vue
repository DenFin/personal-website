<template>
  <section id="work" class="works panel">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <section-headline headline="Arbeiten" color="turqoise"></section-headline>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12 col-lg-6 work-item" v-for="work in works.data" :key="work.id">
                      
                      <div v-if="work.ACF.image" >
                        <img :src="work.ACF.image.url" :alt="work.ACF.image.alt">
                      </div>
                      <h3>{{ work.title.rendered }}</h3>
                      <p>{{work.beschreibung }}</p>
                  </div>
          </div>
      </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}


import SectionHeadline from '../../components/global/SectionHeadline.vue'
import axios from 'axios'
export default {
  components: { SectionHeadline },
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
                y: 1600
            }
        )

    }  
  },
  mounted(){
    //   this.parallax()
  },
  async created() {
    this.works  = await axios.get('https://www.dennisfink.de/dennisfink.de/wp-json/wp/v2/projekte')
    console.log("ASYNC DATA")
    }
    


}
</script>

<style lang="sass">
.work-item
    &:nth-of-type(2)
        margin-top: 300px
    &:nth-of-type(3)
        margin-top: -200px
        margin-left: 200px

    img
        max-width: 500px
        height: 500px
        object-fit: cover
    
    h3
        margin-bottom: 0

</style>