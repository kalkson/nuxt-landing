<template>
  <header class="container header-container">
    <nav class="header">
      <Logo class="header__logo" />
      <Button />
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  color: white;

  &__logo {
    width: 42px;
    height: 50px;
  }
}

.header-container {
  position: fixed;
  top: 0;
}
</style>
