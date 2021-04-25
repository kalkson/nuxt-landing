<template>
  <button :class="[type, 'button']">sign in</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'empty',
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  width: fit-content;
  height: fit-content;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 4px;
  opacity: 0;

  &.filled {
    padding: 14px 70px;
    color: $color-main;
    background: $color-secondary;
  }

  &.empty {
    padding: 14px 34px;
    color: $color-primary;
    background: none;
    border: solid 1px $color-primary;
  }
}
</style>
