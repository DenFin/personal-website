<template>
  <div class="col-xs-12 col-lg-6 work-item">
    <figure v-if="work.ACF.image">
      <img
        :src="work.ACF.image.url"
        :alt="work.ACF.image.alt"
      >
      <div class="work-item__overlay">
        <a
          target="_blank"
          :href="work.ACF.link"
        >Zur Website</a>
      </div>
    </figure>
    <h3>{{ work.title.rendered }}</h3>
    <p>{{work.beschreibung }}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: ["work"],
};
</script>

<style lang="sass">
.work-item
  margin-bottom: 2rem
  @media($laptop)
    &:nth-of-type(2)
      margin-top: 300px
    &:nth-of-type(3)
      margin-top: -200px
          // margin-left: 200px

    figure
      position: relative
      &:hover
        .work-item__overlay
          opacity: 1

    &__overlay
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      opacity: 0
      background: rgba(255,255,255,0.5)
      backdrop-filter: blur(5px)
      transition: opacity .3s ease

      display: flex
      justify-content: center
      align-items: center

      a
        color: $black

    figure
      @media($laptop)
        max-width: 500px
        height: 500px
    img
      object-fit: cover
      height: 100%

    h3
      margin-bottom: 0
</style>