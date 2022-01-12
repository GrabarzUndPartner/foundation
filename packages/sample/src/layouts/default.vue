<template>
  <div>
    <page-header :dataset="headerDataset" />
    <Nuxt />
  </div>
</template>

<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';
import PageHeader from '@/components/page/Header';
export default {
  components: {
    PageHeader
  },
  data () {
    return {
      headerDataset: new Dataset([
        {
          label: 'Links',
          value: 'links',
          content: {
            type: 'links',
            props: {
              links: [
                {
                  title: 'button',
                  to: '/button'
                },
                {
                  title: 'link',
                  to: '/link'
                },
                {
                  title: 'collapsible-container',
                  to: '/collapsible-container'
                },
                {
                  title: 'dialog',
                  to: '/dialog'
                },
                {
                  title: 'article',
                  to: '/article'
                },
                {
                  title: 'iframe',
                  to: '/iframe'
                },
                {
                  title: 'toggle',
                  to: '/toggle'
                },
                {
                  title: 'stage',
                  to: '/stage'
                },
                {
                  title: 'image-text',
                  to: '/image-text'
                },
                {
                  title: 'Sample page 1',
                  to: '/sample-page-1'
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
body {
  margin: 0;
  color: #333;
}

fieldset {
  padding: calc(16 / 12 * 1em) calc(8 / 12 * 1em);
  margin: calc(12 / 16 * 1em) 0;
  border: solid #333 calc(1 / 16 * 1em);

  & legend {
    padding: calc(4 / 12 * 1em) calc(8 / 12 * 1em);
    font-family: sans-serif;
    font-size: calc(12 / 16 * 1em);
    color: #fff;
    background: #666;
  }
}

</style>
