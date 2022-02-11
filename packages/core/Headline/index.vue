<template>
  <component :is="`h${level}`" v-bind="$attrs" v-on="$listeners">
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
    }
  }
};

</script>
