<template>
  <layout-content
    debug-id="page"
    forced-tag="article"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </layout-content>
</template>

<script>
import LayoutContent from '@/components/layouts/Content';

export default {
  components: {
    LayoutContent
  },
  inheritAttrs: false
};
</script>
