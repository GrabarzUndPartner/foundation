
<template>
  <div>
    <atom-headline>
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
  </div>
</template>

<script>
import BaseTeaser from '@foundation/core/Article/Teaser';
import DefaultTeaser from '@foundation/core/Article/Teaser/default';
import AtomHeadline from '@/components/atoms/Headline';
export default {
  components: {
    BaseTeaser,
    DefaultTeaser,
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
