<template>
  <button
    class="button"
    :class="classes"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot name="icon" />
    <slot name="default">
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
      default: null
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
        disabled: this.disabled,
        loading: this.loading
      };
    }
  }
};
</script>
