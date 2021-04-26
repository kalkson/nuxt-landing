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
  font-size: 3.2rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  opacity: 0;

  &__oranged {
    color: $color-primary;
  }

  @include md {
    font-size: 9.6rem;
  }
}
</style>
