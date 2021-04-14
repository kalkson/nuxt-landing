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
  text-transform: uppercase;
  font-size: 2rem;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;

  &.filled {
    color: $color-main;
    background: $color-secondary;
    padding: 14px 70px;
  }

  &.empty {
    background: none;
    color: $color-primary;
    border: solid 1px $color-primary;
    padding: 14px 34px;
  }
}
</style>
