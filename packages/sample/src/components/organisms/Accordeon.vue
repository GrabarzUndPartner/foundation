<template>
  <layout-lost-container class="organism-accordeon">
    <molecule-accordeon />
  </layout-lost-container>
</template>

<script>
import MoleculeAccordeon from '@/components/molecules/Accordeon';
import LayoutLostContainer from '@/components/layouts/LostContainer';
export default {
  components: { MoleculeAccordeon, LayoutLostContainer },
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
.organism-accordeon {
  margin: em(32) 0;

  @media (--sm) {
    margin: em(48) 0;
  }
}

</style>
