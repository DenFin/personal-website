<template>
  <section class="services panel">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <section-headline headline="Leistungen" color="red"></section-headline>
              </div>
          </div>
          <div class="row">
            <div v-for="service in services.data" :key="service.id" class="col-xs-12 col-lg-10">
              <h3 v-html="service.title.rendered"></h3>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import SectionHeadline from '../../components/global/SectionHeadline.vue'
export default {
  components: { SectionHeadline },
  data(){
    return {
      services: []
    }
  },
  async created(){
    this.services = await axios.get('https://www.dennisfink.de/dennisfink.de/wp-json/wp/v2/leistungen')
  }

}
</script>

<style>

</style>