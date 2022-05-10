<template>
  <core-structure-page>
    <fieldset>
      <legend>Base</legend>
      <base-headline>Document Heading Level 1</base-headline>
      <core-structure>
        <base-headline>Document Heading Level 2</base-headline>
        <core-structure>
          <base-headline>Document Heading Level 3</base-headline>
          <core-structure>
            <base-headline>Document Heading Level 4</base-headline>
            <core-structure>
              <base-headline>Document Heading Level 5</base-headline>
              <core-structure>
                <base-headline>Document Heading Level 6</base-headline>
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </fieldset>
    <fieldset>
      <legend>Default</legend>
      <default-headline>Document Heading Level 1</default-headline>
      <core-structure>
        <default-headline>Document Heading Level 2</default-headline>
        <core-structure>
          <default-headline>Document Heading Level 3</default-headline>
          <core-structure>
            <default-headline>Document Heading Level 4</default-headline>
            <core-structure>
              <default-headline>Document Heading Level 5</default-headline>
              <core-structure>
                <default-headline>Document Heading Level 6</default-headline>
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </fieldset>
    <fieldset>
      <legend>Sample</legend>
      <atom-headline v-bind="{text: `Headline H1`, overline: `Overline H1`}" />
      <core-structure>
        <atom-headline v-bind="{text: `Headline H2`, overline: `Overline H2`}" />
        <core-structure>
          <atom-headline v-bind="{text: `Headline H3`, overline: `Overline H3`}" />
          <core-structure>
            <atom-headline v-bind="{text: `Headline H4`, overline: `Overline H4`}" />
            <core-structure>
              <atom-headline v-bind="{text: `Headline H5`, overline: `Overline H5`}" />
              <core-structure>
                <atom-headline v-bind="{text: `Headline H6`, overline: `Overline H6`}" />
              </core-structure>
            </core-structure>
          </core-structure>
        </core-structure>
      </core-structure>
    </fieldset>
  </core-structure-page>
</template>

<script>

import CoreStructurePage from '@foundation/core/Structure/Page';
import CoreStructure from '@foundation/core/Structure';

import BaseHeadline from '@foundation/core/Headline';
import DefaultHeadline from '@foundation/core/Headline/default';
import AtomHeadline from '@/components/atoms/Headline';
export default {
  components: {
    CoreStructurePage,
    CoreStructure,
    BaseHeadline,
    DefaultHeadline,
    AtomHeadline
  },

  data () {
    return {};
  }
};

</script>
