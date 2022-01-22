<template>
  <div class="milestone">
    <h3>{{ milestone.title }}</h3>
    <p>{{ milestone.time }}</p>
  </div>
</template>

<script>
export default {
  props: ["milestone"],
};
</script>

<style scoped>
h3 {
  margin-bottom: 0;
}
</style>