<template>
  <base-structure tag="div" v-bind="$attrs" static v-on="$listeners">
    <template #header>
      <slot name="header" />
    </template>
    <template #default>
      <slot name="default" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
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
