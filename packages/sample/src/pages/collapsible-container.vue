<template>
  <div>
    <fieldset>
      <legend>CollapsibleContainer</legend>
      <collapsible-container :dataset="datasetA" collapsible />
    </fieldset>
    <fieldset>
      <legend>Accordeon (Index)</legend>
      <accordeon-index :dataset="datasetB" />
    </fieldset>

    <fieldset>
      <legend>Accordeon (Default)</legend>
      <accordeon-default />
    </fieldset>
    <hr>
    <fieldset>
      <legend>FlyoutNavi (Index)</legend>
      <flyout-navi-index :dataset="datasetC" />
    </fieldset>
    <fieldset>
      <legend>FlyoutNavi (Default)</legend>
      <div class="flyout-container">
        <flyout-navi-default />
      </div>
    </fieldset>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CollapsibleContainer from '@foundation/core/CollapsibleContainer';
import AccordeonIndex from '@foundation/core/CollapsibleContainer/Accordeon';
import AccordeonDefault from '@foundation/core/CollapsibleContainer/Accordeon/default';
import FlyoutNaviIndex from '@foundation/core/CollapsibleContainer/FlyoutNavi';
import FlyoutNaviDefault from '@foundation/core/CollapsibleContainer/FlyoutNavi/default';
import Transformable from '@foundation/core/CollapsibleContainer/Transformable';

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';

export default {
  components: {
    CollapsibleContainer,
    AccordeonIndex,
    AccordeonDefault,
    FlyoutNaviIndex,
    FlyoutNaviDefault,
    Transformable
  },
  data () {
    return {
      datasetA: getDataset('Label A'),
      datasetB: getDataset('Label B'),
      datasetC: getDataset('Label C')
    };
  }
};
const getDataset = (label) => {
  return new Dataset([
    { label: label + '1', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
    { label: label + '2', value: 'b', content: 'CONTENT B' },
    { label: label + '3', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
  ], new Model('default', 'b'));
};
</script>

<style lang="postcss" scoped>
.flyout-container {
  position: relative;
  height: 300px;
}
</style>
