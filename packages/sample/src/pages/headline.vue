<template>
  <div>
    <fieldset>
      <legend>Base</legend>
      <base-headline v-for="index in 6" :key="index" :level="index">
        {{ `Headline H${index}` }}
      </base-headline>
    </fieldset>
    <fieldset>
      <legend>Default</legend>
      <default-headline v-for="index in 6" :key="index" :level="index">
        {{ `Headline H${index}` }}
      </default-headline>
    </fieldset>
    <fieldset>
      <legend>Sample</legend>
      <sample-headline v-for="index in 6" :key="index" :level="index" v-bind="{text: `Headline H${index}`, overline: `Overline H${index}`}" />
    </fieldset>
  </div>
</template>

<script>

import BaseHeadline from '@foundation/core/Headline';
import DefaultHeadline from '@foundation/core/Headline/default';
import SampleHeadline from '@/components/atoms/Headline';
export default {
  components: {
    BaseHeadline,
    DefaultHeadline,
    SampleHeadline
  },

  data () {
    return {};
  }
};

</script>
