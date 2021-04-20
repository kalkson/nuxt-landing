<template>
  <div class="section"><slot></slot></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  height: 400px;
  display: flex;
  flex-direction: column;

  &__button {
    margin-top: auto;
  }
}
</style>
