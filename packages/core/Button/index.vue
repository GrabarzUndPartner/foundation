<template>
  <button class="button"  v-bind="$attrs" v-on="$listeners">
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
