
<template>
  <core-structure class="organism-stage" v-bind="$attrs" v-on="$listeners">
    <template #header>
      <speedkit-picture v-bind="image" />
      <headline class="text">
        {{ text }}
      </headline>
    </template>
  </core-structure>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import CoreStructure from '@foundation/core/Structure';
import Headline from '@/components/atoms/Headline';

export default {
  components: { CoreStructure, SpeedkitPicture, Headline },
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
.organism-stage {
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
