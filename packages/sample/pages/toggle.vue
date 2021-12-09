<template>
  <div>
    <fieldset>
      <legend>Toggle</legend>
      <form>
        <base-toggle :options="optionsA" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Switch (index)</legend>
      <form>
        <toggle-switch :options="optionsB" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseToggle from '@foundation/core/Toggle';
import ToggleSwitch from '@foundation/core/Toggle/mutation/Switch';
import Dataset from '@foundation/core/Toggle/classes/Dataset';
import Model from '@foundation/core/Toggle/classes/Model';

export default {
  components: {
    BaseToggle,
    ToggleSwitch
  },
  data () {
    return {
      optionsA: [
        new Dataset('Label A', new Model('a', false)),
        new Dataset('Label B', new Model('b', true)),
        new Dataset('Label C', new Model('c', false))
      ],
      optionsB: [
        new Dataset('Label D', new Model('d', false)),
        new Dataset('Label E', new Model('e', true)),
        new Dataset('Label F', new Model('f', false))
      ]
    };
  }
};

</script>
