<template>
  <div>
    <stage-image-text v-bind="stage" />
    <image-text-horizontal v-bind="imageText" />
    <image-text-horizontal v-bind="imageText" :image-right="true" />
    <image-text-horizontal v-bind="imageText" />
  </div>
</template>

<script>

import StageImageText from '@foundation/core/Stage/mutation/ImageText.vue';
import ImageTextHorizontal from '@foundation/core/ImageText/mutation/Horizontal';

export default {
  components: {
    StageImageText,
    ImageTextHorizontal
  },
  data () {
    return {
      stage: {
        image: {
          title: 'Stage',
          sources: [
          // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        },
        headline: {
          tag: 'h1',
          content: 'This is the stage headline.'
        }
      },

      imageText: {
        image: {
          title: 'Stage',
          sources: [
          // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        }
      }

    };
  }
};

</script>
