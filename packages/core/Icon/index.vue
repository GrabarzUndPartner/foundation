<template>
  <base-svg class="icon" v-bind="$attrs" :class="size">
    <slot name="default" />
  </base-svg>
</template>

<script>
import BaseSvg from '../Svg';

export default {
  components: {
    BaseSvg
  },

  inheritAttrs: false,

  props: {
    size: {
      type: String,
      default: null
    }
  }
};
</script>

