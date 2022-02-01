<template>
  <div class="menuOverlay no-animation">
    <nav>
      <ul>
        <li><a
            @click="closeMenu"
            href="#start"
          >Start</a></li>
        <li><a
            @click="closeMenu"
            href="#about"
          >About</a></li>
        <li><a
            @click="closeMenu"
            href="#work"
          >Work</a></li>
        <li><a
            @click="closeMenu"
            href="#contact"
          >Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      document.querySelector(".hamburger").classList.remove("opened");
      document.querySelector(".menuOverlay").classList.remove("is-active");
    },
  },
};
</script>

<style lang="sass" scoped>
.menuOverlay
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(255,255,255, 0.7)

  z-index: 9

  display: flex
  justify-content: center
  align-items: center

  opacity: 0
  pointer-events: none
  transform: translateX(-100%)
  transition: transform .75s ease, opacity .75s ease, backdrop-filter 2s ease

  &.no-animation
    transform: translateX(-100%)
    transition: transform .75s ease, opacity .75s ease

    &.is-active
      backdrop-filter: blur(7px)
      opacity: 1
      pointer-events: all
      transform: translateX(0)
      transition: transform .75s ease, opacity .75s ease, backdrop-filter 2s ease
      li
        transform: translateX(-100%)
        animation:
          name: slideIn
          duration: 700ms
          fill-mode: forwards
          timing-function: ease

        @for $i from 1 through 4
          &:nth-of-type(#{$i})
            animation:
              delay: (150ms * $i) - 150

    ul
      margin: 0
      padding: 0
      list-style: none

    li
      text-align: center

    a
      color: inherit
      text-decoration: none
      font-size: 3.2rem
      font-weight: 700
      padding: 1rem
      display: block

@keyframes slideIn
  from
    transform: translateX(-100%)
  to
    transform: translateX(0)
</style>