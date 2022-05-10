
<template>
  <core-structure-page>
    <component
      :is="component"
      v-for="({component, props}, index) in content"
      :key="index"
      v-bind="props"
      :critical="index < 2"
    />
  </core-structure-page>
</template>

<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';
import CoreStructurePage from '@foundation/core/Structure/Page';

export default {
  components: {
    CoreStructurePage,
    LayoutComponentWrapper: speedkitHydrate(() => import('@/components/layouts/ComponentWrapper')),
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
          component: 'OrganismInfos',
          props: {
            headline: {
              text: 'Infos'
            },
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'LayoutComponentWrapper',
          props: {
            components: [
              {
                component: 'OrganismText',
                props: {
                  headline: {
                    overline: 'ComponentWrapper',
                    text: 'Text'
                  },
                  content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
                }
              },
              {
                component: 'OrganismGallery',
                props: {
                  headline: {
                    overline: 'ComponentWrapper',
                    text: 'Gallery'
                  }
                }
              }

            ]
          }
        },
        {
          component: 'OrganismText',
          props: {
            headline: {
              overline: null,
              text: 'Text 1'
            },
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismGallery',
          props: {}
        },
        {
          component: 'OrganismGallery',
          props: {
            headline: {
              overline: null,
              text: 'Gallery'
            }
          }
        },
        {
          component: 'OrganismText',
          props: {
            headline: {
              overline: null,
              text: 'Text 2'
            },
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismTextImage',
          props: {
            headline: {
              overline: null,
              text: 'TextImage 1'
            },
            content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et…',
            revert: false
          }
        },
        {
          component: 'OrganismTextImage',
          props: {
            headline: {
              overline: null,
              text: 'TextImage 2'
            },
            content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et…',
            revert: true
          }
        },
        {
          component: 'OrganismText',
          props: {
            headline: {
              overline: null,
              text: 'Text 3'
            },
            content: '<p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em> <strong><em>ut labore et dolore magna aliquyam erat</em></strong>, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam</p> <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, <em>sed diam nonumy eirmod tempor invidunt</em></p> <ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ol>'
          }
        },
        {
          component: 'OrganismTeaserWall',
          props: {}
        },
        {
          component: 'OrganismTeaserWall',
          props: {
            headline: {
              text: 'TeaserWall'
            }
          }
        },
        {
          component: 'OrganismAccordeon',
          props: {
            items: [
              {
                label: 'Item 1',
                value: 'item1',
                content: [
                  {
                    type: 'Headline',
                    props: {
                      overline: 'This is an overline',
                      text: 'This is the headline.'
                    }
                  },
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 1</p>'
                    }
                  },
                  {
                    type: 'Link',
                    props: {
                      title: 'Sample Link',
                      to: {
                        hash: 'sample'
                      }
                    }
                  }
                ]
              },
              {
                label: 'Item 2',
                value: 'item2',
                content: [
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 2</p>'
                    }
                  },
                  {
                    type: 'Button',
                    props: {
                      label: 'Sample Button'
                    }
                  }
                ]
              },
              {
                label: 'Item 3',
                value: 'item3',
                content: [
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 3</p>'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          component: 'OrganismAccordeon',
          props: {
            headline: {
              overline: 'Sample Overline',
              text: 'Sample Headline'
            },
            items: [
              {
                label: 'Item 1',
                value: 'item12',
                content: [
                  {
                    type: 'Headline',
                    props: {
                      overline: 'This is an overline',
                      text: 'This is the headline.'
                    }
                  },
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 1</p>'
                    }
                  },
                  {
                    type: 'Link',
                    props: {
                      title: 'Sample Link',
                      to: {
                        hash: 'sample'
                      }
                    }
                  }
                ]
              },
              {
                label: 'Item 2',
                value: 'item22',
                content: [
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 2</p>'
                    }
                  },
                  {
                    type: 'Button',
                    props: {
                      label: 'Sample Button'
                    }
                  }
                ]
              },
              {
                label: 'Item 3',
                value: 'item32',
                content: [
                  {
                    type: 'RichText',
                    props: {
                      value: '<p>RichText Lorem Ipsum item 3</p>'
                    }
                  }
                ]
              }
            ]
          }
        }
      ]

    };
  }
};

</script>
