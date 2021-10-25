<template>
    <section id="cv-start">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <section-headline headline="Curriculum vitae" size="large"></section-headline>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeadline from "../components/global/SectionHeadline"

export default {
  components: { SectionHeadline }

}
</script>

<style lang="sass">
#cv-start
    min-height: 100vh
    display: flex
    align-items: center

</style>