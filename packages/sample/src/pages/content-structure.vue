<template>
  <layout-content tag="main" debug-id="page">
    <fieldset>
      <legend>Content</legend>
      <layout-content debug-id="stage" :is-top-level="true">
        <atom-headline v-bind="{text: `Stage Headline H1`, overline: null}" />
      </layout-content>

      <layout-content debug-id="content-wrap" :disabled="true">
        <layout-content debug-id="content-1">
          <atom-headline v-bind="{text: `Content 1 Headline H2`, overline: null}" />
        </layout-content>

        <layout-content debug-id="content-2">
          <atom-headline v-bind="{text: `Content 2 Headline H2`, overline: null}" />
        </layout-content>
        <layout-content debug-id="content-3">
          <layout-content debug-id="content-4">
            <atom-headline v-bind="{text: `Content 4 Headline H3`, overline: null}" />
            <layout-content debug-id="content-5">
              <atom-headline v-bind="{text: `Content 5 Headline H4`, overline: null}" />
            </layout-content>
          </layout-content>
        </layout-content>
      </layout-content>
    </fieldset>
  </layout-content>
</template>

<script>

import LayoutContent from '@/components/layouts/Content';
import AtomHeadline from '@/components/atoms/Headline';

export default {
  components: {
    LayoutContent,
    AtomHeadline
  },

  data () {
    return {};
  }
};

</script>
