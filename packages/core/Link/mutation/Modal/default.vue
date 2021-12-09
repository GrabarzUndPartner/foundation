<template>
  <modal-link class="design-default" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <slot name="default" />
    </template>
  </modal-link>
</template>

<script>
import ModalLink from './index';

export default {
  components: {
    ModalLink
  },

  inheritAttrs: false
};
</script>
