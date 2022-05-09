<template>
  <document-section tag="main">
    <fieldset>
      <legend>Base</legend>
      <base-headline>Document Heading Level 1</base-headline>
      <document-section>
        <base-headline>Document Heading Level 2</base-headline>
        <document-section>
          <base-headline>Document Heading Level 3</base-headline>
          <document-section>
            <base-headline>Document Heading Level 4</base-headline>
            <document-section>
              <base-headline>Document Heading Level 5</base-headline>
              <document-section>
                <base-headline>Document Heading Level 6</base-headline>
              </document-section>
            </document-section>
          </document-section>
        </document-section>
      </document-section>
    </fieldset>
    <fieldset>
      <legend>Default</legend>
      <default-headline>Document Heading Level 1</default-headline>
      <document-section>
        <default-headline>Document Heading Level 2</default-headline>
        <document-section>
          <default-headline>Document Heading Level 3</default-headline>
          <document-section>
            <default-headline>Document Heading Level 4</default-headline>
            <document-section>
              <default-headline>Document Heading Level 5</default-headline>
              <document-section>
                <default-headline>Document Heading Level 6</default-headline>
              </document-section>
            </document-section>
          </document-section>
        </document-section>
      </document-section>
    </fieldset>
    <fieldset>
      <legend>Sample</legend>
      <sample-headline v-bind="{text: `Headline H1`, overline: `Overline H1`}" />
      <document-section>
        <sample-headline v-bind="{text: `Headline H2`, overline: `Overline H2`}" />
        <document-section>
          <sample-headline v-bind="{text: `Headline H3`, overline: `Overline H3`}" />
          <document-section>
            <sample-headline v-bind="{text: `Headline H4`, overline: `Overline H4`}" />
            <document-section>
              <sample-headline v-bind="{text: `Headline H5`, overline: `Overline H5`}" />
              <document-section>
                <sample-headline v-bind="{text: `Headline H6`, overline: `Overline H6`}" />
              </document-section>
            </document-section>
          </document-section>
        </document-section>
      </document-section>
    </fieldset>
  </document-section>
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
