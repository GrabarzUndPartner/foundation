<template>
  <base-article class="article-design-editorial" v-bind="$attrs" :level="1" v-on="$listeners">
    <slot name="category">
      {{ category }}
    </slot>
    <slot name="headline">
      {{ headline }}
    </slot>
    <slot name="subline">
      {{ subline }}
    </slot>
  </base-article>
</template>

<script>
import BaseArticle from '../../index';

export default {
  components: {
    BaseArticle
  },

  inheritAttrs: false,
  props: {
    category: {
      type: String,
      default: 'Category'
    },
    subline: {
      type: String,
      default: 'Subline'
    },
    headline: {
      type: String,
      default: 'Headline'
    },

    copy: {
      type: Object,
      default () {
        return {
          content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.'
        };
      }
    }
  }

};
</script>
