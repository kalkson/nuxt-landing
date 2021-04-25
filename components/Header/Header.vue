<template>
  <div class="container header-container">
    <nav class="header">
      <Logo class="header__logo" />
      <Button />
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  height: 90px;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  &__logo {
    height: 50px;
    width: 42px;
  }
}

.header-container {
  position: fixed;
}
</style>
