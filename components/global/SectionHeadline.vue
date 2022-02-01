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
  font-weight: 700
  position: relative
  display: inline-block
  margin-bottom: 4rem
  line-height: 1.2

  &::after
    content: ''
    display: block
    position: absolute
    bottom: -10px
    height: 7px
    width: 100%

.red
  &::after
    background: $red

.turqoise
  &::after
    background: $turqoise

.large
  font-size: 5.4rem
</style>