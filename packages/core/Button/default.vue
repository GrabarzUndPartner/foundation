<template>
  <button-base v-bind="$attrs" v-on="$listeners">
    <slot name="default" />
  </button-base>
</template>

<script>
import ButtonBase from './base';

export default {
  components: {
    ButtonBase
  },

  inheritAttrs: false
};
</script>


<style lang="postcss" scoped>
>>> .button {
  color: white;
  background: #b00;
  border: solid #000 2px;
}
</style>
