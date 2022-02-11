<template>
  <base-teaser v-bind="$attrs" v-on="$listeners">
    <template #default>
      <speedkit-picture v-bind="image" />
      <span>{{ image.title }}</span>
    </template>
  </base-teaser>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import BaseTeaser from './index';
export default {
  components: { SpeedkitPicture, BaseTeaser },
  inheritAttrs: false,
  props: {
    image: {
      type: Object,
      required: true
    }
  }
};
</script>
