<template>
  <div>
    <fieldset>
      <legend>CollapsibleContainer</legend>
      <collapsible-container :dataset="dataset" collapsible />
    </fieldset>
    <fieldset>
      <legend>Accordeon (Index)</legend>
      <accordeon-index :dataset="dataset" />
    </fieldset>
    <fieldset>
      <legend>Accordeon (Default)</legend>
      <accordeon-default />
    </fieldset>
    <hr>
    <fieldset>
      <legend>FlyoutNavi (Index)</legend>
      <flyout-navi-index :dataset="dataset" />
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
import AccordeonIndex from '@foundation/core/CollapsibleContainer/mutation/Accordeon';
import AccordeonDefault from '@foundation/core/CollapsibleContainer/mutation/Accordeon/Default';
import FlyoutNaviIndex from '@foundation/core/CollapsibleContainer/mutation/FlyoutNavi';
import FlyoutNaviDefault from '@foundation/core/CollapsibleContainer/mutation/FlyoutNavi/default';
import Transformable from '@foundation/core/CollapsibleContainer/mutation/Transformable';

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
      dataset: new Dataset([
        { label: 'LABEL A', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
        { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
        { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
      ], new Model('default', 'b'))
    };
  }
};
</script>

<style lang="postcss" scoped>
.flyout-container {
  position: relative;
  height: 300px;
}
</style>
