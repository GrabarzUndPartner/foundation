<template>
  <component :is="component" class="splide__slide">
    <slot />
  </component>
</template>

<script>

export default {
  props: {
    component: {
      type: [String, Function, Object],
      default: 'div'
    }
  }
};

</script>
