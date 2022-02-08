
<template>
  <div>
    <atom-headline :level="2">
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
    <atom-headline :level="2">
      Teaser
    </atom-headline>
    <fieldset>
      <legend>Base</legend>
      <div class="teasers">
        <base-teaser v-for="(teaser, index) in teasers" v-bind="teaser" :key="index">
          <template #default>
            DEFAULT SLOT
          </template>
          <template #caption>
            {{ teaser.caption }}
          </template>
        </base-teaser>
      </div>
    </fieldset>
    <fieldset>
      <legend>Default</legend>
      <div class="teasers">
        <default-teaser v-for="(teaser, index) in teasers" v-bind="teaser" :key="index" />
      </div>
    </fieldset>
    <fieldset>
      <legend>Default</legend>
      <div class="teasers">
        <sample-teaser v-for="(teaser, index) in teasers" v-bind="teaser" :key="index" />
      </div>
    </fieldset>
  </div>
</template>

<script>/* eslint-disable vue/no-unused-components */
import BaseArticle from '@foundation/core/Article';
import DefaultArticle from '@foundation/core/Article/default';
import BaseTeaser from '@foundation/core/Article/Teaser';
import DefaultTeaser from '@foundation/core/Article/Teaser/default';
import SampleArticle from '@/components/molecules/Article';
import SampleTeaser from '@/components/molecules/Teaser';
import AtomHeadline from '@/components/atoms/Headline';
export default {
  components: {
    BaseArticle,
    DefaultArticle,
    SampleArticle,
    BaseTeaser,
    DefaultTeaser,
    SampleTeaser,
    AtomHeadline
  },

  data () {
    return {
      teasers: Array(8).fill({}).map((v, index) => {
        return { ...getTeaser(), caption: `Teaser ${index}` };
      })
    };
  }
};

const getTeaser = () => {
  return {
    to: '/',
    image: {
      title: 'Teaser',
      sources: [
        { src: '/img/1080x1080.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
      ]
    }
  };
};
</script>

<style lang="postcss" scoped>
.teasers {
  display: flex;
  flex-wrap: wrap;

  & > * {
    box-sizing: border-box;
    width: calc(100% / 1);
    padding: em(5);

    @media (--xs) {
      width: calc(100% / 2);
      padding: em(10);
    }

    @media (--sm) {
      width: calc(100% / 3);
      padding: em(10);
    }

    @media (--md) {
      width: calc(100% / 4);
      padding: em(20);
    }
  }
}

</style>
