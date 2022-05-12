
<template>
  <core-structure id="layout">
    <core-structure id="page">
      <core-structure>
        <component
          :is="component"
          v-for="({component, props}, index) in content.slice(0,1)"
          :key="index"
          v-bind="props"
          critical
        />
        <core-structure>
          <component
            :is="component"
            v-for="({component, props}, index) in content.slice(1)"
            :key="index"
            v-bind="props"
            :critical="index < 1"
          />
        </core-structure>
      </core-structure>
    </core-structure>
  </core-structure>
</template>

<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';
import CoreStructure from '@foundation/core/Structure';

export default {
  layout: 'test',
  components: {
    CoreStructure,
    OrganismStage: speedkitHydrate(() => import('@/components/organisms/Stage')),
    OrganismText: speedkitHydrate(() => import('@/components/organisms/Text')),
    OrganismGallery: speedkitHydrate(() => import('@/components/organisms/Gallery')),
    OrganismTextImage: speedkitHydrate(() => import('@/components/organisms/TextImage')),
    OrganismTeaserWall: speedkitHydrate(() => import('@/components/organisms/TeaserWall')),
    OrganismAccordeon: speedkitHydrate(() => import('@/components/organisms/Accordeon')),
    OrganismInfos: speedkitHydrate(() => import('@/components/organisms/Infos'))

  },
  data () {
    return {

      content: [
        {
          component: 'OrganismGallery',
          props: {
            headline: {
              overline: null,
              text: 'Gallery'
            }
          }
        }
      ]

    };
  }
};

</script>
