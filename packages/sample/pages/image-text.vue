
<template>
  <div>
    <fieldset>
      <legend>Base Image Text</legend>
      <form>
        <base-image-text v-bind="imageText" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Image Text Horizontal</legend>
      <form>
        <image-text-horizontal v-bind="imageText" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Image Text Horizontal (imageRight)</legend>
      <form>
        <image-text-horizontal v-bind="imageText" :image-right="true" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseImageText from '@foundation/core/ImageText';
import ImageTextHorizontal from '@foundation/core/ImageText/mutation/Horizontal';

export default {
  components: {
    BaseImageText,
    ImageTextHorizontal
  },
  data () {
    return {
      imageText: {
        image: {
          title: 'Image Text',
          sources: [
          // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        },
        headline: {
          tag: 'h1',
          content: 'This is the image-text headline.'
        }
      }

    };
  }
};

</script>
