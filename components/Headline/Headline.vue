<template>
  <h1 class="headline">
    <slot></slot>
  </h1>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.headline {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 9.6rem;
  color: white;

  &__oranged {
    color: $color-primary;
  }
}
</style>
