<template>
  <i class="svg" v-bind="$attrs" v-on="$listeners">
    <slot name="default">
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path d="M64.664 6.504a3 3 0 0 0-4.16.832l-33.97 50.955L11.121 42.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18 18a2.996 2.996 0 0 0 2.416.864 2.998 2.998 0 0 0 2.201-1.32l36-54a3 3 0 0 0-.832-4.16" fill="#00358E" fill-rule="evenodd" /></svg>
    </slot>
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
    display: block;
    width: 100%;
  }
}
</style>
