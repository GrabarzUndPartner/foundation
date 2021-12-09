<template>
  <button class="button" v-on="$listeners">
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
