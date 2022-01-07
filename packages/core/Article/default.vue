<template>
  <base-article v-bind="$attrs" class="article-design-default">
    <template #category>
      <slot name="category" />
    </template>
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
</template>

<script>
import BaseArticle from '@foundation/core/Article';

export default {
  components: {
    BaseArticle
  },
  inheritAttrs: false
};
</script>
