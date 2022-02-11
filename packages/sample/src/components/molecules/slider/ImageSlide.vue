<template>
  <basic-slide class="molecule-slider-image-slide">
    <speedkit-picture v-bind="image" />
  </basic-slide>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import BasicSlide from '@foundation/core/Slider/Slide';

export default {
  components: { BasicSlide, SpeedkitPicture },
  props: {
    image: {
      type: Object,
      default () {
        return {
          sources: [
            { src: '/img/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            { src: '/img/1080x1080.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ],
          title: 'Image Title',
          alt: 'Image Alt'
        };
      }
    }
  }
};
</script>
<style lang="postcss" scoped>
.molecule-slider-image-slide {
  /* empty */
}
</style>
