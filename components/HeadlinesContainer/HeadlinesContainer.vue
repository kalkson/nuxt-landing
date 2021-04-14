<template>
  <section class="container"><slot></slot></section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  height: 400px;
  display: flex;
  flex-direction: column;

  & button:last-child {
    margin-top: auto;
  }
}
</style>
