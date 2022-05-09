
<template>
  <div class="organism-stage-image-text">
    <speedkit-picture v-bind="image" />
    <sample-headline class="text">
      {{ text }}
    </sample-headline>
  </div>
</template>
<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import SampleHeadline from '@/components/atoms/Headline';

export default {
  components: { SpeedkitPicture, SampleHeadline },
  inheritAttrs: false,
  props: {
    image: {
      type: Object,
      required: true // for data structure see https://nuxt-speedkit.grabarzundpartner.dev/components/speedkit-picture
    },
    text: {
      type: String,
      default: 'Text undefined…'
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-stage-image-text {
  position: relative;

  & .text {
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: em(32, 32) 0;
    margin: 0;
    font-size: em(32);
    text-align: center;

    @media (--sm) {
      padding: em(32, 64);
      font-size: em(64);
    }

    @media (--md) {
      top: 0;
      right: 0;
      left: auto;
      width: auto;
      padding: em(64, 64);
      font-size: em(64);
    }

    @media (--lg) {
      padding: em(96, 96);
      font-size: em(96);
    }
  }

}
</style>
