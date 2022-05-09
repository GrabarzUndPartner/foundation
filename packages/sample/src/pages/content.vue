<template>
  <document-section tag="main">
    <fieldset>
      <legend>Content</legend>

      <layout-content debug-id="level-1">
        <span>LEVEL 1</span>
        <layout-content debug-id="level-2">
          <span>LEVEL 2</span>
          <layout-content debug-id="level-3">
            <span>LEVEL 3</span>
            <layout-content debug-id="level-4">
              <span>LEVEL 4</span>
              <layout-content debug-id="level-5">
                <span>LEVEL 5</span>
              </layout-content>
            </layout-content>
          </layout-content>
        </layout-content>
      </layout-content>
    </fieldset>
  </document-section>
</template>

<script>

import LayoutContent from '@/components/layouts/Content';
export default {
  components: {
    LayoutContent
  },

  data () {
    return {};
  }
};

</script>
