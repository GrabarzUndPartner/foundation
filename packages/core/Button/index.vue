<template>
  <button
    class="button"
    :class="classes"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot name="icon" />
    <slot>
      <span v-if="label" v-html="label" />
    </slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'Button Label'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'style-disabled': this.disabled,
        'style-loading': this.loading
      };
    }
  }
};
</script>
