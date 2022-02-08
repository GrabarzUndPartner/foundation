<template>
  <layout-lost-container :container="false" class="organism-gallery">
    <molecule-slider />
  </layout-lost-container>
</template>

<script>
import MoleculeSlider from '@/components/molecules/Slider';
import LayoutLostContainer from '@/components/layouts/LostContainer';
export default {
  components: { MoleculeSlider, LayoutLostContainer },
  props: {
    overline: {
      type: String,
      default: 'Overline'
    },
    headline: {
      type: String,
      default: 'Headline'
    },
    content: {
      type: String,
      default: '<p>Text</p>'
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-gallery {
  margin: em(32) 0;

  @media (--sm) {
    margin: em(48) 0;
  }

}

</style>
