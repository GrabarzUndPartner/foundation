<template>
  <div>
    <collapsible-container
      :dataset="dataset"
      collapsible
    />
  </div>
</template>

<script>

import CollapsibleContainer from '@foundation/core/CollapsibleContainer';
import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';

export default {

  components: { CollapsibleContainer },

  layout: 'test',

  props: {
    dataset: {
      type: Dataset,
      default () {
        return new Dataset([
          { label: 'Label A', value: 'a', content: 'Content A' },
          { label: 'Label B', value: 'b', content: 'Content B' },
          { label: 'Label C', value: 'c', content: 'Content C' }
        ], new Model('collapsible--container-test', 'a'));
      }
    }
  }
};

</script>
