<template>
  <base-link class="design-default" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <slot name="default" />
    </template>
  </base-link>
</template>

<script>
import BaseLink from './index';

export default {
  components: {
    BaseLink
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.design-default {
  font-family: monospace;
}
</style>
