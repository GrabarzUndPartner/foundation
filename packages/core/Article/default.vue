<template>
  <base-article v-bind="$attrs" class="design-default" v-on="$listeners">
    <template #header>
      <slot name="header" :level="level">
        <default-headline :level="level">
          <slot name="headline" />
        </default-headline>
      </slot>
    </template>
    <template #default>
      <default-rich-text :value="content">
        <slot />
      </default-rich-text>
    </template>
  </base-article>
</template>

<script>
import BaseArticle from '@foundation/core/Article';
import DefaultHeadline from '@foundation/core/Headline/default';
import DefaultRichText from '@foundation/core/RichText/default';

export default {
  components: {
    BaseArticle,
    DefaultHeadline,
    DefaultRichText
  },
  inheritAttrs: false,
  props: {
    level: {
      type: Number,
      default: 2
    },
    content: {
      type: String,
      default: null
    }
  }
};
</script>
