<template>
  <base-article v-bind="$attrs" class="molecule-article" v-on="$listeners">
    <template #header>
      <slot name="header" :level="level">
        <atom-headline :level="level" :text="headline" :overline="overline" />
      </slot>
    </template>
    <template #default>
      <atom-rich-text :value="content">
        <slot />
      </atom-rich-text>
      <slot name="after" />
    </template>
  </base-article>
</template>

<script>
import BaseArticle from '@foundation/core/Article';
import AtomHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';

export default {
  components: {
    BaseArticle,
    AtomHeadline,
    AtomRichText
  },
  inheritAttrs: false,
  props: {
    level: {
      type: Number,
      default: 2
    },
    overline: {
      type: String,
      default: null
    },
    headline: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule-article {
  & span {
    display: block;
  }

  & >>> {
    & .atom-headline {
      margin: 0;
      margin-bottom: em(20);

      /* font-size: 1rem;
      font-weight: normal; */

      /* & span:first-child {
        margin-bottom: em(10, 12);
        font-size: em(12);
        font-weight: bold;
      }

      & span:last-child {
        font-size: em(24);
        font-weight: bold;
      } */
    }
  }
}
</style>
