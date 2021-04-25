<template>
  <li
    :class="['item', { active: isActive }]"
    @click.prevent="$emit('updateView')"
  >
    <span class="item__label"><slot></slot></span>
    <div class="item__dot"></div>
  </li>
</template>

<script>
export default {
  props: {
    after: {
      type: Boolean,
      required: false,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
$base: item;

.item {
  position: relative;
  margin: 30px 0;
  font-size: 2.4rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;

  &::after {
    position: absolute;
    top: calc(100%);
    right: calc(100% + 15px);
    width: 2px;
    height: 28px;
    content: '';
    background: white;
  }

  &__dot {
    position: absolute;
    top: calc(50% - 6px);
    right: calc(100% + 10px);
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 20px;
    transition: transform 0.2s linear;
    transform: scale(1);
  }

  &__label {
    display: block;
    text-shadow: 2px 2px 20px #000;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: transform 0.1s linear, opacity 0.2s linear;
    transform: translateX(-50%);
  }

  &:hover {
    .item__label {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }

    .item__dot {
      transform: scale(1.5);
    }

    cursor: pointer;
  }

  &.active {
    /* .item__label {
      visibility: visible;
      transform: translateX(0);
      opacity: 1;
    } */

    .item__dot {
      background-color: $color-primary;
      transform: scale(1.5);
    }
  }
}
</style>
