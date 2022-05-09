<template>
  <div
    class="lost-container"
  >
    <slot name="background" />
    <div
      :class="{'lost-flex-container': container}"
    >
      <slot />
    </div>
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
    },
    container: {
      type: Boolean,
      default: true
    }
  }

};

</script>

<style lang="postcss">
.lost-container {
  & .lost-flex-container {
    display: flex;

    @media (--default-max) {
      padding: 0 $lost-gutter;
    }

    @media (--xs) {
      lost-center: em(540px);
    }

    @media (--sm) {
      lost-center: em(720px);
    }

    @media (--md) {
      lost-center: em(960px);
    }

    @media (--lg) {
      lost-center: em(1140px);
    }
  }
}
</style>
