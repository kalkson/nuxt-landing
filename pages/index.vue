<template>
  <div class="full-screen-grid">
    <Navigation
      v-gsap.fromTo="[
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 1 },
      ]"
      class="navigation"
    />
    <HeadlinesContainer />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.full-screen-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 200px) 1fr;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
