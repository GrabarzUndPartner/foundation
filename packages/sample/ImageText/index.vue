<template>
  <div class="image-text" v-bind="$attrs">
    <slot name="image">
      <speedkit-picture v-if="image" v-bind="image" />
    </slot>
    <slot name="content">
      Slot "content"
    </slot>
  </div>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
export default {
  components: { SpeedkitPicture },
  props: {
    image: {
      type: Object,
      required: false, // for data structure see https://nuxt-speedkit.grabarzundpartner.dev/components/speedkit-picture,
      default: null
    }
  }
};
</script>
