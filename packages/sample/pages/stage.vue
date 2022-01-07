
<template>
  <div>
    <fieldset>
      <legend>Base Stage</legend>
      <form>
        <base-stage :image="image" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Stage ImageText</legend>
      <form>
        <stage-image-text :image="image" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseStage from '@foundation/core/Stage';
import StageImageText from '@foundation/core/Stage/mutation/ImageText';

export default {
  components: {
    BaseStage,
    StageImageText
  },
  data () {
    return {
      image: {
        title: 'Stage',
        sources: [
          // eslint-disable-next-line no-secrets/no-secrets
          { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
          // eslint-disable-next-line no-secrets/no-secrets
          { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
        ]
      }
    };
  }
};

</script>
