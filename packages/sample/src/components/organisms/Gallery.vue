<template>
  <core-structure class="organism-gallery" v-bind="$attrs" v-on="$listeners">
    <template #header>
      <layout-lost-container>
        <atom-headline class="headline" v-bind="headline" />
      </layout-lost-container>
    </template>
    <template #default>
      <layout-lost-container>
        <molecule-slider class="slider" />
      </layout-lost-container>
    </template>
  </core-structure>
</template>

<script>
import CoreStructure from '@foundation/core/Structure';
import AtomHeadline from '@/components/atoms/Headline';
import MoleculeSlider from '@/components/molecules/Slider';
import LayoutLostContainer from '@/components/layouts/LostContainer';

export default {
  components: { AtomHeadline, MoleculeSlider, LayoutLostContainer, CoreStructure },
  inheritAttrs: false,
  props: {
    headline: {
      type: Object,
      required: true,
      default () {
        return null;
      }
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

  & .headline,
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
