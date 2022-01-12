<template>
  <mutation-modal-opener-to class="atom-link-modal" :component="component" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </mutation-modal-opener-to>
</template>

<script>
import MutationModalOpenerTo from '@foundation/core/mutation/ModalOpenerTo';
import Link from '../Link';

export default {
  components: {
    MutationModalOpenerTo
  },
  inheritAttrs: false,
  data () {
    return {
      component: Link
    };
  }
};
</script>

<style lang="postcss" scoped>
.atom-link-modal {
  /* empty */
}
</style>
