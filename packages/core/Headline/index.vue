<template>
  <document-heading v-font="font" v-bind="$attrs" v-on="$listeners">
    <slot />
  </document-heading>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    font: {
      type: [Object, Array],
      default () {
        return [];
      }
    }
  }
};

</script>
