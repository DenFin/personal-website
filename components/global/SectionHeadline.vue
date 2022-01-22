<template>
  <h2 :class="headlineClasses">{{ headline }}</h2>
</template>

<script>
export default {
  props: ["headline", "color", "border", "size"],
  computed: {
    headlineClasses() {
      const classes = "section-headline";
      if (this.color === "turqoise") {
        return classes + " turqoise";
      } else if (this.color === "red") {
        return classes + " red";
      }

      if (this.size === "large") {
        return classes + " large";
      }
    },
  },
};
</script>

<style lang="sass">
.section-headline
    font-size: 4.2rem
    font-weight: 700
    position: relative
    display: inline-block
    margin-bottom: 4rem

    &::after
        content: ''
        display: block
        position: absolute
        bottom: -10px
        height: 10px
        width: 100%

    @media(min-width: 769px)
        margin-bottom: 6rem

.red
    &::after
        background: $red

.turqoise
    &::after
        background: $turqoise

.large
    font-size: 5.4rem
</style>