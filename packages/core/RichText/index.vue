<template>
  <div v-if="$slots.default" v-font="font">
    <slot :value="value" />
  </div>
  <div v-else v-font="font" v-html="value" />
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: null
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
