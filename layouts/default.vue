<template>
  <div>
      <site-header></site-header>
      <Nuxt />
    </div>
</template>
<script>
import SiteHeader from "./../components/global/SiteHeader.vue"

export default{
  components: {
      SiteHeader
  }
}
</script>

<style lang="sass">
html
    font:
        size: 62.5%

body
    font:
        family: $primaryFont
        size: 1.6rem
</style>