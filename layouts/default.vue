<template>
  <div class="main-container">
    <Header />
    <div v-if="!showHideSpinner" class="container">
      <Nuxt />
    </div>
    <Loading v-if="!showHideSpinner" class="loading-spinner" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHideSpinner: true,
    }
  },
  beforeCreate() {
    this.showHideSpinner = true
  },
  mounted() {
    this.showHideSpinner = false
  },
}
</script>

<style lang="scss">
.loading-spinner {
  z-index: -1;
}

header {
  z-index: 10000;
}

body {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: rgba($color: #fff, $alpha: 0.2);
}

.container {
  width: 100%;
  height: fit-content;
  padding: 0 50px;

  @include md {
    padding: 0 140px;
  }
}
</style>
