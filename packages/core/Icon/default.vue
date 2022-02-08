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
    width: 16px;
  }

  &.medium {
    width: 24px;
  }

  &.large {
    width: 32px;
  }
}
</style>
