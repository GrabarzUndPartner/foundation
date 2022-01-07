<template>
  <base-button-file class="button-file" icon="upload" :component="component" v-bind="$attrs" v-on="$listeners">
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </base-button-file>
</template>

<script>
import BaseButtonFile from '@foundation/core/Button/mutation/File';
import Button from '../Button';

export default {
  components: {
    BaseButtonFile
  },
  inheritAttrs: false,

  props: {
    accept: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      component: Button
    };
  },

  methods: {
    onChangeInput (e) {
      this.$emit('change', e.target.files);
    }
  }

};
</script>

<style lang="postcss" scoped>
.button-file {
  /* empty */
}
</style>
