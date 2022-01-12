<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link v-bind="link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
    <div style="height: 3000px;" />
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    };
  }
};
</script>
