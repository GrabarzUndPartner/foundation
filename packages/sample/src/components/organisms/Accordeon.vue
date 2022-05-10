<template>
  <core-structure class="organism-accordeon">
    <template #header>
      <layout-lost-container>
        <div v-if="headline" class="headline">
          <atom-headline v-bind="headline" />
        </div>
      </layout-lost-container>
    </template>
    <template #default>
      <layout-lost-container>
        <molecule-accordeon class="content" :items="items" />
      </layout-lost-container>
    </template>
  </core-structure>
</template>

<script>

import CoreStructure from '@foundation/core/Structure';
import AtomHeadline from '@/components/atoms/Headline';
import MoleculeAccordeon from '@/components/molecules/Accordeon';
import LayoutLostContainer from '@/components/layouts/LostContainer';

export default {
  components: {
    AtomHeadline,
    MoleculeAccordeon,
    LayoutLostContainer,
    CoreStructure
  },
  props: {
    headline: {
      type: Object,
      default () {
        return null;
      }
    },
    items: {
      type: Array,
      required: true,
      default () {
        return [
          {
            label: 'Item 1',
            value: 'item1',
            content: [
              {
                type: 'RichText',
                props: {
                  text: 'Lorem Ipsum item 1'
                }
              }
            ]
          }
        ];
      }
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

  & .headline {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;
  }

  & .content {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;
  }
}

</style>
