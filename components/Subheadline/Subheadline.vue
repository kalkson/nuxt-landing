<template>
  <h2 class="subheadline"><slot></slot></h2>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.subheadline {
  margin-top: 19px;
  font-size: 2.2rem;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  opacity: 0;

  @include md {
    font-size: 3.2rem;
  }
}
</style>
