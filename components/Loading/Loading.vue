<template>
  <div class="loading-page">
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style scoped lang="scss">
.loading-page {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  /* background: rgba(255, 255, 255, 0.8); */

  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
}

.sk-chase {
  position: relative;
  width: 70px;
  height: 70px;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot::before {
  display: block;
  width: 25%;
  height: 25%;
  content: '';
  background: $color-background;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1)::before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2)::before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3)::before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4)::before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5)::before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6)::before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
