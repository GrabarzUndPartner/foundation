
<template>
  <figure class="base-iframe">
    <iframe v-show="show" v-bind="$attrs" frameborder="0" @load="onLoad" @click="onClick" />
    <slot name="placeholder" />
  </figure>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    show: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onLoad (e) {
      if (e.target.src) {
        this.$emit('load', e);
      }
    },

    onClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>
