<template>
  <section id="contact" class="panel bg--turqoise">
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-lg-6">
                  <section-headline headline="Bereit? Los geht's!" color="black" border="none" size="large"></section-headline>
                  <p>

Sie brauchen eine Website oder Landingpage oder haben ein anderes Projekt, dass Sie gerne umsetzen möchten? Schreiben Sie mir eine E-Mail und ich melde mich bei Ihnen.
                  </p>
              </div>
          </div>
          <div class="arrow">
        <svg width="215" height="208" viewBox="0 0 215 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M182.324 43.4637L200.696 176.314L67.8462 194.685" stroke="#FF4365" stroke-width="25" stroke-miterlimit="10"/>
            <path d="M132.85 6.01059L151.221 138.86L18.3716 157.232" stroke="#FF4365" stroke-width="25" stroke-miterlimit="10"/>
        </svg>
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

<style lang="sass" scoped>
#contact
  position: relative
  .arrow
    position: absolute
    right: 10%
    bottom: 0
    transform: rotate(180deg)
    @media($smallDevices)
      display: none
    
.section-headline
  margin-bottom: 2rem

.col-lg-6
  margin: 0 auto

</style>