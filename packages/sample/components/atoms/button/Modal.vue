<template>
  <base-button-modal class="button-modal" :component="component" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </base-button-modal>
</template>

<script>
import BaseButtonModal from '@foundation/core/Button/mutation/Modal';
import Button from '../Button';

export default {
  components: {
    BaseButtonModal
  },
  inheritAttrs: false,
  data () {
    return {
      component: Button
    };
  },
  mounted () {
    console.log('tesd', this.$scopedSlots);
  }
};
</script>

<style lang="postcss" scoped>
.button-modal {
  /* empty */
}
</style>
