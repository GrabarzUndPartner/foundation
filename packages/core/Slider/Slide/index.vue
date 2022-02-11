<template>
  <component :is="component" :id="`${splideId}-slide${String(index + 1).padStart(2, '0')}`" class="splide__slide">
    <slot />
  </component>
</template>

<script>

export default {
  props: {
    component: {
      type: [String, Function, Object],
      default: 'div'
    },
    splideId: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};

</script>
