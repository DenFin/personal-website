<template>
  <section
    id="start"
    class="home-start"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-6 d-flex align-center">
          <div>
            <p class="intro">Hi, ich bin Dennis 👋 </p>
            <h1>
              Als ausgebildeter <span class="text-red">Mediengestalter</span> und autodidaktischer <span class="text-turqoise">Programmierer</span> entwickle ich moderne Websites und Apps.
            </h1>
            <p>Neben den üblichen Verdächtigen HTML, CSS und Javascript arbeite ich gerne mit Vue.js und Nuxt.js. Das Erlernen von neuen Technologien reizt mich auch nach fast 10 Jahren Erfahrung immer noch.</p>
            <nuxt-link
              class="link"
              to="/#about"
            >Mehr erfahren</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow arrow-1">
      <svg
        width="215"
        height="208"
        viewBox="0 0 215 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M182.324 43.4637L200.696 176.314L67.8462 194.685"
          stroke="#FF4365"
          stroke-width="25"
          stroke-miterlimit="10"
        />
        <path
          d="M132.85 6.01059L151.221 138.86L18.3716 157.232"
          stroke="#FF4365"
          stroke-width="25"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
    <div class="arrow arrow-2">
      <svg
        width="439"
        height="469"
        viewBox="0 0 439 469"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.606 102.734L343.208 33.9999L411.942 292.602"
          stroke="#00D9C0"
          stroke-width="55"
          stroke-miterlimit="10"
        />
        <path
          d="M22.4873 209.827L281.089 141.093L349.823 399.695"
          stroke="#00D9C0"
          stroke-width="55"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import splitting from "splitting"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
  //   Splitting()
}

export default {
  mounted() {
    // this.revealText();
    this.parallax();
  },
  methods: {
    revealText() {
      window.addEventListener("load", function () {
        let splitWords = function (selector) {
          var elements = document.querySelectorAll(selector);

          elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
              .split(/\s/)
              .map(function (word) {
                return word
                  .split("-")
                  .map(function (word) {
                    return '<span class="word">' + word + "</span>";
                  })
                  .join('<span class="hyphen">-</span>');
              })
              .join('<span class="whitespace"> </span>');
          });
        };

        let splitLines = function (selector) {
          var elements = document.querySelectorAll(selector);

          splitWords(selector);

          elements.forEach(function (el) {
            var lines = getLines(el);

            var wrappedLines = "";
            lines.forEach(function (wordsArr) {
              wrappedLines += '<span class="line"><span class="words">';
              wordsArr.forEach(function (word) {
                wrappedLines += word.outerHTML;
              });
              wrappedLines += "</span></span>";
            });
            el.innerHTML = wrappedLines;
          });
        };

        let getLines = function (el) {
          var lines = [];
          var line;
          var words = el.querySelectorAll("span");
          var lastTop;
          for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
              // Don't start with whitespace
              if (!word.classList.contains("whitespace")) {
                lastTop = word.offsetTop;

                line = [];
                lines.push(line);
              }
            }
            line.push(word);
          }
          return lines;
        };

        splitLines("h1");

        let revealText = document.querySelectorAll(".reveal-text");

        gsap.registerPlugin(ScrollTrigger);
        let revealLines = revealText.forEach((element) => {
          const lines = element.querySelectorAll(".words");

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              toggleActions: "restart none none reset",
            },
          });
          tl.set(element, { autoAlpha: 1 });
          tl.from(lines, 1, {
            yPercent: 100,
            ease: Power3.out,
            stagger: 0.25,
            delay: 0.2,
          });
        });
      });
    },
    parallax() {
      gsap.to(".arrow-1", {
        ease: "none",
        yPercent: -125,
        scrollTrigger: {
          trigger: "#start",
          start: "center center",
          scrub: true,
        },
        y: 250,
      });

      gsap.to(".arrow-2", {
        ease: "none",
        yPercent: -25,
        scrollTrigger: {
          trigger: "#start",
          start: "center center",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style lang="sass">
#start
  background:
    image: url('/img/home/dennisfink_portrait.png')
    position: bottom center
    repeat: no-repeat
    size: 80vh
  height: 100vh
  overflow: hidden
  position: relative

  display: flex
  align-items: center

  .container
    z-index: 1

  .intro, h1, p
    margin-bottom: 3rem

  h1
    font-weight: 700
    // margin: 0
    span
      font-weight: 700

  a
    margin-top: 20px
    // margin-left: 5px
    display: block

  .arrow
    display: none
    position: absolute
    @media($smallDevices)
      display: none
      &-1
        top: 100px
        left: 30%

      &-2
        bottom: 100px
        left: 50%
        z-index: -1

@media($laptop)
  #start
    background:
      position: bottom right
</style>