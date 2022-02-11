<template>
  <base-link v-bind="$attrs" v-on="$listeners">
    <base-article>
      <slot />
    </base-article>
  </base-link>
</template>

<script>
import BaseLink from '../../Link';
import BaseArticle from '../index';
export default {
  components: {
    BaseLink,
    BaseArticle
  },
  inheritAttrs: false
};
</script>
