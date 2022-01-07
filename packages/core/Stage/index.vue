<template>
  <div class="stage">
    <slot name="background">
      <speedkit-picture v-bind="image" />
    </slot>
    <slot name="default" />
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  props: {
    image: {
      type: Object,
      required: true // for data structure see https://nuxt-speedkit.grabarzundpartner.dev/components/speedkit-picture
    }
  }
};
</script>
