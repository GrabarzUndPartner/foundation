<template>
  <core-structure class="organism-teaser-wall">
    <template v-if="headline" #header>
      <layout-lost-container>
        <div class="headline">
          <atom-headline v-bind="headline" />
        </div>
      </layout-lost-container>
    </template>
    <template #default>
      <layout-lost-container>
        <div class="teasers">
          <molecule-teaser v-for="(teaser, index) in teasers" v-bind="teaser" :key="index" />
        </div>
      </layout-lost-container>
    </template>
  </core-structure>
</template>
<script>
import CoreStructure from '@foundation/core/Structure';
import LayoutLostContainer from '@/components/layouts/LostContainer';

import AtomHeadline from '@/components/atoms/Headline';
import MoleculeTeaser from '@/components/molecules/Teaser';
export default {
  components: { LayoutLostContainer, CoreStructure, MoleculeTeaser, AtomHeadline },
  props: {
    headline: {
      type: Object,
      default () {
        return null;
      }
    },
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
  margin: em(32) 0;

  @media (--sm) {
    margin: em(48) 0;
  }

  & .headline {
    @media (--sm) {
      lost-column: 10 / 12;
      lost-offset: 1 / 12;
    }

    @media (--lg) {
      lost-column: 10 / 12;
      lost-offset: 1 / 12;
    }
  }

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
