<template>
  <base-teaser class="molecule-teaser" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <speedkit-picture v-bind="image" />
      <span v-font="$getFont('Poppins', 500)">{{ caption }}</span>
    </template>
  </base-teaser>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import BaseTeaser from '@foundation/core/Article/Teaser';
export default {
  components: {
    SpeedkitPicture, BaseTeaser
  },
  inheritAttrs: false,
  props: {
    image: {
      type: Object,
      required: true
    },
    caption: {
      type: String,
      default: 'Teaser Caption'
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule-teaser {
  text-decoration: none;

  & span {
    display: block;
    margin: em(10, 16);
    font-size: em(16);
    text-align: center;
    letter-spacing: em(0.2, 16);
  }

}
</style>
