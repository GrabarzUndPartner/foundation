<template>
  <div>
    <page-header :dataset="headerDataset" critical />
    <Nuxt />
    <page-footer :links="footerLinks" />
  </div>
</template>

<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';

import speedkitLoader from 'nuxt-speedkit/loader';

export default {
  components: {
    PageHeader: () => import('@/components/page/Header'),
    PageFooter: speedkitLoader(() => import('@/components/page/Footer'))
  },
  data () {
    return {
      footerLinks: [
        {
          title: 'Imprint',
          to: '#imprint'
        },
        {
          title: 'Disclaimer',
          to: '#disclaimer'
        }
      ],
      headerDataset: new Dataset([
        {
          label: 'Links',
          value: 'links',
          content: {
            type: 'links',
            props: {
              links: [
                {
                  title: 'Button',
                  to: '/button'
                },
                {
                  title: 'Dialog',
                  to: '/dialog'
                },
                {
                  title: 'Headline',
                  to: '/headline'
                },
                {
                  title: 'Rich Text',
                  to: '/rich-text'
                },
                {
                  title: 'Collapsible-Container',
                  to: '/collapsible-container'
                },
                {
                  title: 'Link',
                  to: '/link'
                },
                {
                  title: 'Slider',
                  to: '/slider'
                },
                {
                  title: 'Article',
                  to: '/article'
                },
                {
                  title: 'Toggle',
                  to: '/toggle'
                }
              ]
            }
          }
        },
        {
          label: 'Text',
          value: 'text',
          content: {
            type: 'text',
            props: {
              text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
            }
          }
        }], new Model('default-a', 'b'))
    };
  }
};
</script>

<style lang="postcss">
@import "@/assets/css/vars.pcss";

body {
  margin: 0;
  color: var(--color-typo);

  & a {
    color: var(--color-link);
  }

}

fieldset {
  padding: em(16) em(8);
  margin: em(12) 0;
  border: solid #333 em(1);

  & legend {
    padding: em(4, 12) em(8, 12);
    font-family: sans-serif;
    font-size: em(12);
    color: #fff;
    background: #666;
  }
}

</style>

<style lang="postcss">
body {
  @media (--default-max) {
    font-size: vw(16, 375);
  }

  @media (--xs-min-max) {
    font-size: vw(16, 576);
  }

  @media (--sm-min-max) {
    font-size: vw(16, 768);
  }

  @media (--md-min-max) {
    font-size: vw(16, 992);
  }
}

</style>
