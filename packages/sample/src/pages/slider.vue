<template>
  <div>
    <fieldset>
      <legend>Base</legend>
      <base-slider />
    </fieldset>
    <br><br><br><br><br><br><br><br><br><br><br>
    <fieldset>
      <legend>Default</legend>
      <default-slider />
    </fieldset>
    <br><br><br><br><br><br><br><br><br><br><br>
    <fieldset>
      <legend>Default (Loop)</legend>
      <default-slider :options="{type: 'loop'}" />
    </fieldset>
    <br><br><br><br><br><br><br><br><br><br><br>
    <fieldset>
      <legend>Sample</legend>
      <sample-slider />
    </fieldset>
    <br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>/* eslint-disable vue/no-unused-components */

import BaseSlider from '@foundation/core/Slider';
import DefaultSlider from '@foundation/core/Slider/default';
import SampleSlider from '@/components/molecules/Slider';
export default {
  components: {
    BaseSlider,
    DefaultSlider,
    SampleSlider
  },

  data () {
    return {};
  }
};

</script>
