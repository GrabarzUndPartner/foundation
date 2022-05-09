<template>
  <layout-lost-container class="organism-accordeon">
    <layout-content>
      <molecule-accordeon :items="items" />
    </layout-content>
  </layout-lost-container>
</template>

<script>
import MoleculeAccordeon from '@/components/molecules/Accordeon';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import LayoutContent from '@/components/layouts/Content';

export default {
  components: {
    MoleculeAccordeon,
    LayoutLostContainer,
    LayoutContent
  },
  props: {
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

  & .layout-content {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;
  }
}

</style>
