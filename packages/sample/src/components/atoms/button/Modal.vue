<template>
  <mutation-modal-opener-click class="atom-button-modal" :component="component" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </mutation-modal-opener-click>
</template>

<script>
import MutationModalOpenerClick from '@foundation/core/mutation/ModalOpenerClick';
import Button from '../Button';

export default {
  components: {
    MutationModalOpenerClick
  },
  inheritAttrs: false,
  data () {
    return {
      component: Button
    };
  }
};
</script>

<style lang="postcss" scoped>
.button-modal {
  /* empty */
}
</style>
