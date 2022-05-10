<template>
  <layout-structure class="layout-component-wrapper" static>
    <slot>
      <component
        :is="component"
        v-for="({component, props}, index) in components"
        :key="index"
        v-bind="props"
      />
    </slot>
  </layout-structure>
</template>

<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';
import LayoutStructure from '@foundation/core/Structure';
export default {
  components: {
    LayoutStructure,
    OrganismStage: speedkitHydrate(() => import('@/components/organisms/Stage')),
    OrganismText: speedkitHydrate(() => import('@/components/organisms/Text')),
    OrganismGallery: speedkitHydrate(() => import('@/components/organisms/Gallery')),
    OrganismTextImage: speedkitHydrate(() => import('@/components/organisms/TextImage')),
    OrganismTeaserWall: speedkitHydrate(() => import('@/components/organisms/TeaserWall')),
    OrganismAccordeon: speedkitHydrate(() => import('@/components/organisms/Accordeon'))
  },
  props: {
    components: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};

</script>
