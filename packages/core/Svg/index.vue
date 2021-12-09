<template>
  <i class="svg" v-bind="$attrs" v-on="$listeners">
    <slot name="default" />
  </i>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.svg {
  display: inline-block;
  vertical-align: middle;

  & svg {
    width: 100%;
  }
}
</style>
