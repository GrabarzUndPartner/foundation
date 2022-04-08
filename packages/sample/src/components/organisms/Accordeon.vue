<template>
  <layout-lost-container class="organism-accordeon">
    <molecule-accordeon class="accordeon" :items="items" />
  </layout-lost-container>
</template>

<script>
import MoleculeAccordeon from '@/components/molecules/Accordeon';
import LayoutLostContainer from '@/components/layouts/LostContainer';

export default {
  components: { MoleculeAccordeon, LayoutLostContainer },
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

  & .accordeon {
    lost-offset: 1 / 12;
    lost-column: 10 / 12;
  }
}

</style>
