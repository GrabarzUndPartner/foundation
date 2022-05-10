
<template>
  <div>
    <atom-headline>
      Article
    </atom-headline>

    <fieldset>
      <legend>Base</legend>
      <base-article>
        <template #header>
          Header Slot
        </template>
        <template #default>
          Content Slot
        </template>
      </base-article>
    </fieldset>

    <fieldset>
      <legend>Default</legend>
      <default-article>
        <template #headline>
          Headline
        </template>
        <template #default>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ol>
        </template>
      </default-article>
    </fieldset>

    <fieldset>
      <legend>Sample</legend>
      <sample-article
        v-bind="{overline: 'Overline', headline: 'Headline'}"
      >
        <template #default>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ol>
        </template>
      </sample-article>
    </fieldset>
  </div>
</template>

<script>
import BaseArticle from '@foundation/core/Article';
import DefaultArticle from '@foundation/core/Article/default';
import SampleArticle from '@/components/molecules/Article';
import AtomHeadline from '@/components/atoms/Headline';
export default {
  components: {
    BaseArticle,
    DefaultArticle,
    SampleArticle,
    AtomHeadline
  }
};

</script>
