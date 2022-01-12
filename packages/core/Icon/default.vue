<template>
  <base-icon class="design-default" v-bind="$attrs">
    <slot name="default" />
  </base-icon>
</template>

<script>
import BaseIcon from './index';

export default {
  components: {
    BaseIcon
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.design-default.icon {
  &.small {
    width: calc(16 / 16 * 1em);
  }

  &.medium {
    width: calc(24 / 16 * 1em);
  }

  &.large {
    width: calc(32 / 16 * 1em);
  }
}
</style>
