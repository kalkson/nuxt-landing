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
  margin: 30px 0;
  position: relative;
  font-size: 2.4rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: white;
    right: calc(100% + 15px);
    top: calc(100%);
    height: 28px;
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 20px;
    background-color: white;
    position: absolute;
    right: calc(100% + 10px);
    top: calc(50% - 6px);
    transform: scale(1);
    transition: transform 0.2s linear;
  }

  &__label {
    visibility: hidden;
    opacity: 0;
    transition: transform 0.1s linear, opacity 0.2s linear;
    transform: translateX(-50%);
    display: block;
    white-space: nowrap;
    text-shadow: 2px 2px 20px #000;
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
