
<template>
  <div>
    <component :is="component" v-for="({component, props}, index) in content" :key="index" v-bind="props" :critical="index < 2" />
  </div>
</template>

<script>

import speedkitLoader from 'nuxt-speedkit/loader';

export default {
  components: {
    OrganismStage: speedkitLoader(() => import('@/components/organisms/Stage')),
    OrganismText: speedkitLoader(() => import('@/components/organisms/Text')),
    OrganismGallery: speedkitLoader(() => import('@/components/organisms/Gallery')),
    OrganismTextImage: speedkitLoader(() => import('@/components/organisms/TextImage')),
    OrganismTeaserWall: speedkitLoader(() => import('@/components/organisms/TeaserWall'))

  },
  data () {
    return {

      content: [
        {
          component: 'OrganismStage',
          props: {

            image: {
              title: 'Stage',
              sources: [
                // eslint-disable-next-line no-secrets/no-secrets
                { src: '/img/1920x1080.jpg', sizes: { xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(min-width: 576px)' },
                // eslint-disable-next-line no-secrets/no-secrets
                { src: '/img/1080x1080.jpg', sizes: { default: '100vw', xxs: '100vw' }, media: '(max-width:575px)' }
              ]
            },
            text: 'Foundation Sample'
          }
        },
        {
          component: 'OrganismText',
          props: {
            overline: 'Sample Overline',
            headline: 'Sample Headline',
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismGallery',
          props: {}
        },
        {
          component: 'OrganismText',
          props: {
            overline: 'Sample Overline',
            headline: 'Sample Headline',
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismTextImage',
          props: {
            overline: 'TextImage',
            headline: 'First TextImage',
            content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et…',
            revert: false
          }
        },
        {
          component: 'OrganismTextImage',
          props: {
            overline: 'TextImage',
            headline: 'Second TextImage',
            content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et…',
            revert: true
          }
        },
        {
          component: 'OrganismText',
          props: {
            overline: 'Sample Overline',
            headline: 'Sample Headline',
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismTeaserWall',
          props: {
            overline: 'Sample Overline',
            headline: 'Sample Headline',
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        }
      ],

      stage: {
        image: {
          title: 'Stage',
          sources: [
          // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        },
        headline: {
          tag: 'h1',
          content: 'This is the stage headline.'
        }
      },

      imageText: {
        image: {
          title: 'Stage',
          sources: [
          // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/1920x1080.jpg', sizes: { sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' }, media: '(orientation: landscape)' },
            // eslint-disable-next-line no-secrets/no-secrets
            { src: '/img/stage/750x1200.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw' }, media: '(orientation: portrait)' }
          ]
        }
      }

    };
  }
};

</script>
