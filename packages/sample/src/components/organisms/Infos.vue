<template>
  <core-structure class="organism-infos">
    <template #header>
      <layout-lost-container>
        <atom-headline class="headline" v-bind="headline" />
      </layout-lost-container>
    </template>
    <template #default>
      <layout-lost-container>
        <atom-rich-text class="content" :value="content" />
        <core-structure>
          <template #header>
            <atom-headline class="sub-headline" v-bind="subHeadline" />
          </template>
          <core-structure v-for="({overline, headline, content}, index) in infos" :key="index">
            <template #header>
              <atom-headline class="sub-content" :text="headline" :overline="overline" />
            </template>
            <template #default>
              <atom-rich-text class="sub-content" :value="content" />
            </template>
          </core-structure>
        </core-structure>
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

  components: {
    LayoutLostContainer,
    CoreStructure,
    AtomHeadline,
    AtomRichText
  },
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
    subHeadline: {
      type: Object,
      default () {
        return {
          overline: 'Overline',
          content: 'SubHeadline'
        };
      }
    },
    content: {
      type: String,
      default: '<p>Text</p>'
    },
    infos: {
      type: Array,
      default () {
        return Array(3).fill({}).map((v, index) => ({
          overline: null,
          headline: 'Sub Article ' + (index + 1),
          content: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
        }));
      }
    }
  }

};
</script>

<style lang="postcss" scoped>
.organism-infos {
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

  & .sub-headline,
  & .sub-content {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;

    @media (--md) {
      lost-offset: 3 / 12;
      lost-column: 6 / 12;
    }
  }
}

</style>
