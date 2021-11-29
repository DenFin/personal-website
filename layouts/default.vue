<template>
  <div>
      <site-header @toggle-menu="toggleMenu"></site-header>
      <Nuxt />
      <site-footer></site-footer>
      <menu-overlay></menu-overlay>
    </div>
</template>
<script>
import SiteHeader from "./../components/global/SiteHeader"
import SiteFooter from "./../components/global/SiteFooter"
import MenuOverlay from "./../components/global/MenuOverlay"

export default{
  components: {
      SiteHeader,
      SiteFooter,
      MenuOverlay
  },
  methods: {
    toggleMenu(){
      document.querySelector('.hamburger').classList.toggle('opened')
      document.querySelector('.menuOverlay').classList.toggle('is-active')
    }
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