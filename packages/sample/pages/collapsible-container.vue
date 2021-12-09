<template>
  <div>
    <fieldset>
      <legend>CollapsibleContainer</legend>
      <collapsible-container :dataset="dataset" collapsible />
    </fieldset>
    <fieldset>
      <legend>Accordeon (Index)</legend>
      <accordeon-index />
    </fieldset>
    <fieldset>
      <legend>Accordeon (Default)</legend>
      <accordeon-default />
    </fieldset>
    <hr>
    <fieldset>
      <legend>FlyoutNavi (Index)</legend>
      <flyout-navi-index />
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
import Option from '@foundation/core/CollapsibleContainer/classes/Option';

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
    const model = new Model(`default-${Math.random()}`, 'b');
    const options = [
      { label: 'LABEL A', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
      { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
      { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
    ].map(({ label, value, content }) => {
      return new Option(label, value, content);
    });
    return {

      dataset: new Dataset(options, model)
    };
  },
  methods: {
    onClick () {
      console.log('click button');
    }
  }
};
</script>

<style lang="postcss" scoped>
.flyout-container {
  position: relative;
  height: 300px;
}
</style>
