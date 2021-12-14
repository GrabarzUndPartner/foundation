<template>
  <base-link class="teaser" v-bind="$attrs" v-on="$listeners">
    <base-article class="teaser" :level="3">
      <template #headline>
        <slot name="headline" />
      </template>
      <template #subline>
        <slot name="subline" />
      </template>
      <template #default>
        <slot name="default" />
      </template>
    </base-article>
  </base-link>
</template>

<script>
import BaseLink from '../../../Link';
import BaseArticle from '../../index';

export default {
  components: {
    BaseLink,
    BaseArticle
  },

  inheritAttrs: false

};
</script>
