<template>
  <section id="start" class="home-start">
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-md-6 col-lg-6 d-flex align-center">
                  <div>
                    <h1>
                    Hi ich bin Dennis. Webentwickler und 
                    Frontend Entwickler 
                    aus Köln.
                    </h1>
                    <nuxt-link class="link" to="/#about">Mehr erfahren</nuxt-link>
                  </div>
              </div>
          </div>
      </div>
      <div class="arrow arrow-1">
        <svg width="215" height="208" viewBox="0 0 215 208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M182.324 43.4637L200.696 176.314L67.8462 194.685" stroke="#FF4365" stroke-width="25" stroke-miterlimit="10"/>
            <path d="M132.85 6.01059L151.221 138.86L18.3716 157.232" stroke="#FF4365" stroke-width="25" stroke-miterlimit="10"/>
        </svg>
      </div>
      <div class="arrow arrow-2">
        <svg width="439" height="469" viewBox="0 0 439 469" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.606 102.734L343.208 33.9999L411.942 292.602" stroke="#00D9C0" stroke-width="55" stroke-miterlimit="10"/>
            <path d="M22.4873 209.827L281.089 141.093L349.823 399.695" stroke="#00D9C0" stroke-width="55" stroke-miterlimit="10"/>
        </svg>
      </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import splitting from "splitting"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
//   Splitting()
}


export default {
    mounted() {
        this.revealText()
        this.parallax()
    },
  methods: {
      revealText(){
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
                    toggleActions: "restart none none reset"
                }
                });
                tl.set(element, { autoAlpha: 1 });
                tl.from(lines, 1, {
                yPercent: 100,
                ease: Power3.out,
                stagger: 0.25,
                delay: 0.2
                });
            });
            });

      },
    parallax() {
        gsap.to('.arrow-1', {
            ease: "none",
            scrollTrigger: {
                trigger: "#start",
                start: "center center",
                scrub: true
                },
                y: 250
            }
        )

        gsap.to('.arrow-2', {
            ease: "none",
            scrollTrigger: {
                trigger: "#start",
                start: "center center",
                scrub: true
                },
                y: 400
            }
        )

    }
  }
}
</script>

<style lang="sass">
#start
    background:
        image: url('/img/home/dennisfink_portrait.png')
        position: 0px 0px
        repeat: no-repeat
        size: 85vh
    height: 100vh
    overflow: hidden
    position: relative

    display: flex
    align-items: center

    &::after
        position: absolute  
        content: ''
        display: block
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: 
            image: url('/img/dennisfink_bg_pattern.svg')
            size: cover

    .container
        z-index: 1

    h1
        margin: 0

    a
        margin-top: 20px
        margin-left: 5px
        display: block

    .arrow
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