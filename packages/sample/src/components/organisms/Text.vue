<template>
  <layout-lost-container class="organism-text">
    <molecule-article
      :level="2"
      v-bind="{
        overline,
        headline,
        content
      }"
    />
  </layout-lost-container>
</template>

<script>
import MoleculeArticle from '@/components/molecules/Article';
import LayoutLostContainer from '@/components/layouts/LostContainer';
export default {
  components: { MoleculeArticle, LayoutLostContainer },
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
.organism-text {
  margin: em(32) 0;

  @media (--sm) {
    margin: em(48) 0;
  }

  & >>> .article {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;

    @media (--md) {
      lost-offset: 2 / 12;
      lost-column: 8 / 12;
    }
  }
}

</style>
