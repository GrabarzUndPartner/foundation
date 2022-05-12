<template>
  <core-structure class="page">
    <fieldset>
      <legend>Content</legend>

      <core-structure debug-id="level-1">
        <span>LEVEL 1</span>
        <core-structure debug-id="level-2">
          <span>LEVEL 2</span>
          <core-structure debug-id="level-3">
            <span>LEVEL 3</span>
            <core-structure debug-id="level-4">
              <span>LEVEL 4</span>
              <core-structure debug-id="level-5">
                <span>LEVEL 5</span>
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </fieldset>
  </core-structure>
</template>

<script>

import CoreStructure from '@foundation/core/Structure';

export default {
  components: {
    CoreStructure
  },

  data () {
    return {};
  }
};

</script>

<style lang="postcss" scoped>
span {
  display: block;
}

.page {
  & >>> section,
  & >>> article {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

</style>
