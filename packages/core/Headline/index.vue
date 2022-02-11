<template>
  <component :is="`h${level}`" v-font="font" v-bind="$attrs" v-on="$listeners">
    <slot />
  </component>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    level: {
      type: Number,
      default: 1
    },
    font: {
      type: [Object, Array],
      default () {
        return [];
      }
    }
  }
};

</script>
