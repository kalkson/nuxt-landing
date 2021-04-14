<template>
  <Fragment>
    <Header />
    <Nuxt />
  </Fragment>
</template>

<style lang="scss">
body {
  background-color: $color-main;
}

.container {
  width: 100%;
  padding: 0 140px;
  height: fit-content;
}

.full-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}
</style>
