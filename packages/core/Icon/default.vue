<template>
  <base-icon v-bind="$attrs">
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
>>> .icon {
  &.small {
    width: 1em;
  }

  &.medium {
    width: 2em;
  }

  &.large {
    width: 3em;
  }
}
</style>
