<template>
  <section
    id="about"
    class="about"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <section-headline
            headline="Über mich"
            color="red"
          ></section-headline>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-lg-6">

          <p class="text-large">8 Jahre Erfahrung im Konzipieren und Umsetzen von responsiven Websites für Unternehmen unterschiedlichster Größe. Zur Zeit beschäftige mich mit der Entwicklung von reaktiven Javascript Anwendungen mit <strong>Vue.js</strong> und <strong>Nuxt.js</strong> und serverseitigen Anwendungen mit <strong>Node.js</strong></p>
          <!-- <nuxt-link class="link" to="/about">>>Mehr erfahren</nuxt-link><br>
                  <nuxt-link class="link" to="/">>> Lebenslauf</nuxt-link> -->
        </div>
        <!-- <div class="col-xs-12 col-lg-6">
          Diese Website wurde mit <strong>Nuxt.js</strong> und der <strong>WordPress REST API</strong> entwickelt. Erfahren Sie hier mehr über den Entstehungsprozess.
          <nuxt-link
            class="link"
            to="/articles/nuxt-wordpress-api-website"
          >Mehr erfahren</nuxt-link>
        </div> -->
        <div class="col-xs-12 col-lg-6">
          <h2>Stationen der letzten Jahre</h2>
          <base-milestone
            v-for="milestone in milestones"
            v-bind:key="milestone.id"
            :milestone="milestone"
          >
          </base-milestone>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseMilestone from "../../components/about/BaseMilestone.vue";
import SectionHeadline from "../../components/global/SectionHeadline.vue";
export default {
  components: { SectionHeadline, BaseMilestone },
  data() {
    return {
      milestones: [
        {
          id: "freelance-frontend-developer",
          title: "Freelance Frontend Developer",
          time: "09/2017 - heute",
        },
        {
          id: "freelance-web-developer-strokecoach",
          title: "Freelance Webentwickler Strokecoach",
          time: "05/2021 - heute",
        },
        {
          id: "freelance-web-developer-ynfinite",
          title: "Freelance Frontend Entwickler Ynfinite",
          time: "03/2020 - 04/2021",
        },
        {
          id: "freelance-web-developer-köpu",
          title: "Freelance Web Developer KÖNIGSPUNKT",
          time: "10/2017 - 02/2020",
        },
        {
          id: "designer-entwickler-köpu",
          title: "Designer & Frontend Entwickler KÖNIGSPUNKT",
          time: "01/2013 - 09/2017",
        },
        // {
        //   id: "ausbildung-köpu",
        //   title: "Ausbildung Mediengestaltung KÖNIGSPUNKT",
        //   time: "08/2013 - 08/2016",
        // },
        // {
        //   id: "praktikum-köpu",
        //   title: "Praktikum Mediengestaltung KÖNIGSPUNKT",
        //   time: "01/2013 - 07/2013",
        // },
      ],
    };
  },
};
</script>

<style lang="sass">
.about
  padding: 12rem 0

.text-large
  font-size: 2.4rem
</style>