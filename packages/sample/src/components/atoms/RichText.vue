<template>
  <base-rich-text v-bind="$attrs" class="atom-rich-text" v-on="$listeners">
    <slot />
  </base-rich-text>
</template>

<script>
import BaseRichText from '@foundation/core/RichText';
export default {
  components: { BaseRichText },
  inheritAttrs: false
};
</script>
<style lang="postcss" scoped>
.atom-rich-text {
  padding: em(10, 16) 0;
  font-family: sans-serif;
  font-size: em(16);

  &  >>> {
    & p {
      margin: em(10) 0;
    }

    & ul,
    & ol {
      margin: em(10) 0;
    }

  }

}
</style>
