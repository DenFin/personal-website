<template>
  <div>
      <site-header></site-header>
      <Nuxt />
      <site-footer></site-footer>
    </div>
</template>
<script>
import SiteHeader from "./../components/global/SiteHeader"
import SiteFooter from "./../components/global/SiteFooter"

export default{
  components: {
      SiteHeader,
      SiteFooter
  }
}
</script>

<style lang="sass">
.page-enter-active, .page-leave-active
  transition: all .5s ease-in-out


.page-enter
  transform: translateX(-100%)

.page-leave-active
  transform: translateX(100%)

html
    scroll-behavior: smooth
    font:
        size: 62.5%

body
    font:
        family: $primaryFont
        size: 1.6rem
</style>