<template>
  <figure class="molecule-tile" v-bind="$attrs" v-on="$listeners">
    <speedkit-picture v-bind="image" />
    <figcaption v-font="$getFont('Poppins', 500)">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>

import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';

export default {
  components: {
    SpeedkitPicture
  },
  inheritAttrs: false,
  props: {
    image: {
      type: Object,
      required: true
    },
    caption: {
      type: String,
      default: 'Tile Caption'
    }
  }
};

</script>

<style lang="postcss" scoped>
.molecule-tile {
  margin: 0;
  text-decoration: none;

  & figcaption {
    display: block;
    margin: em(10, 16);
    font-size: em(16);
    text-align: center;
    letter-spacing: em(0.2, 16);
  }

}
</style>
