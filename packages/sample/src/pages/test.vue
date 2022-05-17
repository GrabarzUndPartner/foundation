
<template>
  <core-structure id="layout">
    <core-headline>Core Headline</core-headline>
    <!-- <core-structure id="page">
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
    </core-structure> -->
  </core-structure>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import speedkitHydrate from 'nuxt-speedkit/hydrate';
import CoreStructure from '@foundation/core/ContentContainer';
import CoreHeadline from '@foundation/core/Headline';

export default {
  layout: 'test',
  components: {
    CoreStructure,
    CoreHeadline,
    OrganismStage: speedkitHydrate(() => import('@/components/organisms/Stage')),
    OrganismText: speedkitHydrate(() => import('@/components/organisms/Text')),
    OrganismGallery: speedkitHydrate(() => import('@/components/organisms/Gallery')),
    OrganismTextImage: speedkitHydrate(() => import('@/components/organisms/TextImage')),
    OrganismTileWall: speedkitHydrate(() => import('@/components/organisms/TileWall')),
    OrganismAccordeon: speedkitHydrate(() => import('@/components/organisms/Accordeon')),
    OrganismInfos: speedkitHydrate(() => import('@/components/organisms/Infos'))

  },
  data () {
    return {

      content: [
        {
          component: 'OrganismText',
          props: {
            headline: {
              overline: null,
              text: 'Text 1'
            },
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        }
      ]

    };
  }
};

</script>
