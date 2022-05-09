<template>
  <layout-lost-container class="organism-teaser-wall">
    <layout-content>
      <div class="teasers">
        <teaser v-for="(teaser, index) in teasers" v-bind="teaser" :key="index" />
      </div>
    </layout-content>
  </layout-lost-container>
</template>
<script>
import LayoutLostContainer from '@/components/layouts/LostContainer';
import LayoutContent from '@/components/layouts/Content';

import Teaser from '@/components/molecules/Teaser';
export default {
  components: { LayoutLostContainer, LayoutContent, Teaser },
  props: {
    teasers: {
      type: Array,
      default () {
        return Array(8).fill({}).map((v, index) => {
          return { ...getTeaser(), caption: `Teaser ${index}` };
        });
      }
    }
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
.organism-teaser-wall {
  & .teasers {
    --columns: 1;

    display: flex;
    flex-wrap: wrap;

    @media (--sm) {
      --columns: 2;

      lost-column: 10 / 12;
      lost-offset: 1 / 12;
    }

    @media (--lg) {
      --columns: 3;

      lost-column: 10 / 12;
      lost-offset: 1 / 12;
    }

    & > * {
      box-sizing: border-box;
      display: block;
      width: calc(100% / var(--columns));
      padding: em(20);
    }
  }
}
</style>
