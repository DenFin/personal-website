<template>
  <footer class="site__footer">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <div class="d-flex justify-space-between">
                      <div>
                        <nuxt-link to="/impressum">Impressum</nuxt-link>
                        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
                    </div>
                    <div>
                        <span class="white">Dennis Fink {{ currentYear }}</span>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    computed: {
        currentYear(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="sass">
.site__footer
    background: $black
    padding: 2rem 0

    a
        color: $white
        text-decoration: none
        margin-right: 1rem
.white
    color: $white

</style>