<template>
  <div
    :is="tag"
    class="layouts-lost-container"
  >
    <slot name="background" />
    <slot name="container">
      <div
        v-if="$slots.default"
        class="lost-flex-container"
      >
        <slot />
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      required: false,
      default () {
        return 'div';
      }
    }
  }

};

</script>

<style lang="postcss" scoped>
.layouts-lost-container {
  & .lost-flex-container {
    display: flex;

    @media (--default-max) {
      padding: 0 $lost-gutter;
    }

    @media (--xs) {
      lost-center: 540px;
    }

    @media (--sm) {
      lost-center: 720px;
    }

    @media (--md) {
      lost-center: 960px;
    }

    @media (--lg) {
      lost-center: 1140px;
    }
  }
}
</style>
