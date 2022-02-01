<template>
  <section class="services panel">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <section-headline
            headline="Leistungen"
            color="red"
          ></section-headline>
        </div>
      </div>
      <div class="row">
        <service-item
          title="Technische Beratung & Konzeption"
          description="Mein Steckenpferd ist das interdisziplinäre Arbeiten. Daher beginnt ein Projekt für mich immer mit dem Erarbeiten von Anfoderungen an das gewünschte Produkt und ein darauf aufbauendes nachhaltiges Konzept."
          icon="consulting"
        >
        </service-item>
        <service-item
          title="Programmierung individueller Websites und Apps"
          description="Kleine Microsite, Multisite mit CMS oder lieber ein Newsletter? Mit Hilfe von neuesten Technologien entwickle ich responsive Websites, die nicht nur schön anzusehen sind sondern technisch auch auf der Höhe der Zeit sind."
          icon="programming"
        >
        </service-item>
        <service-item
          title="Workshops und Schulungen"
          description="Eine gute Website ist nie fertig. Sie sollte stetig mit neuen Inhalten befüllt werden. Bei Bedarf erhalten Sie Schulungen über Content Management Systeme und Newsletter Tools, so dass Sie ihren Content eigenständig eintragen können."
          icon="workshops"
        >
        </service-item>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import SectionHeadline from "../../components/global/SectionHeadline";
import ServiceItem from "../../components/services/ServiceItem";
export default {
  components: {
    SectionHeadline,
    ServiceItem,
  },
  data() {
    return {
      services: [],
    };
  },
  async created() {
    this.services = await axios.get(
      "https://www.dennisfink.de/dennisfink.de/wp-json/wp/v2/leistungen"
    );
  },
};
</script>

<style lang="sass" scoped>
// .row
//   // display: block
//   // @media($laptop)

// //     &:nth-of-type(2)
// //       margin-left: 15%

// // .col-xs-12
// //   &:nth-of-type(1)
// //     margin-left: auto
// //     margin-right: 15%

// //   &:nth-of-type(3)
// //     margin: 0 auto
</style>