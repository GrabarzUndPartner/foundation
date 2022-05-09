<template>
  <layout-lost-container :container="false" class="organism-gallery">
    <layout-content>
      <molecule-slider class="slider" />
    </layout-content>
  </layout-lost-container>
</template>

<script>
import MoleculeSlider from '@/components/molecules/Slider';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import LayoutContent from '@/components/layouts/Content';

export default {
  components: { MoleculeSlider, LayoutLostContainer, LayoutContent },
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

  & .slider {
    lost-column: 12 / 12;

    @media (--sm) {
      lost-offset: 1 / 12;
      lost-column: 10 / 12;
    }

    @media (--md) {
      lost-offset: 2 / 12;
      lost-column: 8 / 12;
    }
  }

}

</style>
