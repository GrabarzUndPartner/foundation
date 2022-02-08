<template>
  <div v-if="$slots.default">
    <slot :value="value" />
  </div>
  <div v-else v-html="value" />
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: null
    }
  }
};

</script>
