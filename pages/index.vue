<template>
  <div>
    <home-start></home-start>
    <home-about></home-about>
    <home-works></home-works>
    <home-services></home-services>
    <home-contact></home-contact>
  </div>
</template>

<script>
import SiteHeader from "./../components/global/SiteHeader"
import HomeStart from "./../sections/home/HomeStart"
import HomeAbout from "./../sections/home/HomeAbout"
import HomeWorks from "./../sections/home/HomeWorks"
import HomeServices from "./../sections/home/HomeServices"
import HomeContact from "./../sections/home/HomeContact"

export default {
  components: {
    SiteHeader,
    HomeStart,
    HomeAbout,
    HomeWorks,
    HomeServices,
    HomeContact
  }
}
</script>
