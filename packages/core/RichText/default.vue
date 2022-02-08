<template>
  <base-rich-text v-bind="$attrs" class="design-default" v-on="$listeners">
    <slot v-if="$slots.default" />
  </base-rich-text>
</template>

<script>
import BaseRichText from './index';
export default {
  components: {
    BaseRichText
  }
};
</script>

<style lang="postcss" scoped>
>>> {
  font-family: monospace;

  & p {
    margin: 10px 0;
  }

  & ul,
  & ol {
    margin: 10px 0;
  }
}
</style>
