<template>
  <core-structure class="organism-text">
    <template #header>
      <layout-lost-container>
        <atom-headline class="headline" v-bind="headline" />
      </layout-lost-container>
    </template>
    <template #default>
      <layout-lost-container>
        <atom-rich-text class="content" :value="content" />
      </layout-lost-container>
    </template>
  </core-structure>
</template>

<script>
import CoreStructure from '@foundation/core/ContentContainer';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import AtomHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: { CoreStructure, LayoutLostContainer, AtomHeadline, AtomRichText },
  props: {
    headline: {
      type: Object,
      default () {
        return {
          overline: 'Overline',
          content: 'Headline'
        };
      }
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

  & .headline,
  & .content {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;

    @media (--md) {
      lost-offset: 2 / 12;
      lost-column: 8 / 12;
    }
  }
}

</style>
