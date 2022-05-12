<template>
  <core-structure class="page">
    <fieldset>
      <legend>Content</legend>
      <core-structure debug-id="stage">
        <atom-headline v-bind="{text: `Stage Headline H1`, overline: null}" />
      </core-structure>

      <core-structure debug-id="content-wrap">
        <core-structure debug-id="content-1">
          <atom-headline v-bind="{text: `Content 1 Headline H2`, overline: null}" />
        </core-structure>

        <core-structure debug-id="content-2">
          <atom-headline v-bind="{text: `Content 2 Headline H2`, overline: null}" />
        </core-structure>
        <core-structure debug-id="content-3">
          <core-structure debug-id="content-4">
            <atom-headline v-bind="{text: `Content 4 Headline H3`, overline: null}" />
            <core-structure debug-id="content-5">
              <atom-headline v-bind="{text: `Content 5 Headline H4`, overline: null}" />
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </fieldset>
  </core-structure>
</template>

<script>

import CoreStructure from '@foundation/core/Structure';
import AtomHeadline from '@/components/atoms/Headline';

export default {
  components: {
    CoreStructure,
    AtomHeadline
  },

  data () {
    return {};
  }
};

</script>

<style lang="postcss" scoped>
.page {
  & >>> .atom-headline {
    margin: 60px 0;
  }
}
</style>
