<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link v-bind="link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
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
        }
      ]
    };
  }
};
</script>
