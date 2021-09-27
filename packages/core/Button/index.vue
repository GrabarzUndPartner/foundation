<template>
  <button :aria-label="label" v-on="$listeners">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'Button Label'
    }
  }
};
</script>
