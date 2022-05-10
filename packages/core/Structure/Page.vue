<template>
  <base-structure tag="main" v-bind="$attrs" v-on="$listeners">
    <slot />
  </base-structure>
</template>
<script>
import BaseStructure from './index';
export default {
  components: {
    BaseStructure
  },
  inheritAttrs: false
};
</script>
