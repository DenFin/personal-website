<template>
  <div class="col-xs-12 col-lg-6 service-item">
      <figure class="icon">
          <img :src="iconUrl" alt="">
      </figure>
      <div>
          <h3>{{ title }}</h3>
            <p>{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'description', 'icon'],
    computed: {
        iconUrl(){

            switch(this.icon){
                case 'consulting':
                    return '/img/services/dennisfink_icon_beratung_konzeption.svg'
                case 'programming':
                    return '/img/services/dennisfink_icon_programmierung.svg'
                case 'workshops':
                    return '/img/services/dennisfink_icon_workshops_schulungen.svg'
            }
           
        }
    }
}
</script>

<style lang="sass">
.service-item
    display: flex
    margin-bottom: 8rem

    .icon
        width: 180px

    h3
        margin: 0

    figure
        margin-right: 4rem

</style>