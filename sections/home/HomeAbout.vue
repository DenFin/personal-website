<template>
  <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <section-headline headline="Über mich" color="red"></section-headline>
          </div>
        </div>
          <div class="row">
              <div class="col-xs-12 col-lg-6">
                  
                  <p>7 Jahre Erfahrung im Konzipieren und Umsetzen von responsiven Websites für Unternehmen unterschiedlichster Größe. Zur Zeit beschäftige mich mit der Entwicklung von reaktiven Javascript Anwendungen mit <strong>Vue.js</strong> und <strong>Nuxt.js</strong> und serverseitigen Anwendungen mit <strong>Node.js</strong></p>
                  <!-- <nuxt-link class="link" to="/about">>>Mehr erfahren</nuxt-link><br>
                  <nuxt-link class="link" to="/">>> Lebenslauf</nuxt-link> -->
              </div>
              <!-- <div class="col-xs-12 col-lg-6">
                Diese Website wurde mit <strong>Nuxt.js</strong> und der <strong>WordPress REST API</strong> entwickelt. Erfahren Sie hier mehr über den Entstehungsprozess.
                <nuxt-link class="link" to="/articles/nuxt-wordpress-api-website">Mehr erfahren</nuxt-link>
              </div> -->
          </div>
      </div>
  </section>
</template>

<script>
import SectionHeadline from '../../components/global/SectionHeadline.vue'
export default {
  components: { SectionHeadline },

}
</script>

<style lang="sass">
.about
  padding: 12rem 0

</style>