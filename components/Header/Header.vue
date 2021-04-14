<template>
  <Fragment>
    <div class="container header-container">
      <nav class="header"><Logo class="header__logo" /></nav>
    </div>
  </Fragment>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 110px;
  color: white;
  display: flex;
  justify-content: space-between;

  &__logo {
    height: 50px;
    width: 42px;
  }
}

.header-container {
  position: fixed;
}
</style>
