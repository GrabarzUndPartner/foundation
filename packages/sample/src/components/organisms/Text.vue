<template>
  <layout-lost-container class="organism-text">
    <layout-content>
      <template #header>
        <sample-headline :text="headline" :overline="overline" />
      </template>
      <atom-rich-text :value="content" />
    </layout-content>
  </layout-lost-container>
</template>

<script>
import LayoutContent from '@/components/layouts/Content';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import SampleHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: { LayoutContent, LayoutLostContainer, SampleHeadline, AtomRichText },
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

  & >>> .layout-content {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;

    @media (--md) {
      lost-offset: 2 / 12;
      lost-column: 8 / 12;
    }
  }
}

</style>
