<template>
  <div class="milestone">
    <div class="d-flex justify-space-between">
      <h3>{{ milestone.title }}</h3>
      <p v-html=" milestone.time"></p>
    </div>
    <div class="milestone__description">
      <p>{{ milestone.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["milestone"],
};
</script>

<style scoped>
.milestone {
  border-bottom: 1px solid #eee;
  margin-bottom: 4rem;
}

.milestone__description {
  max-width: 500px;
}

span {
  color: #00d9c0;
}

h3 {
  margin-top: 0;
}

h3 + p {
  margin-bottom: 0;
}
p {
  margin-bottom: 4rem;
}
</style>