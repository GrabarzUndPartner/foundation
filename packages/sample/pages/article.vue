
<template>
  <div>
    <fieldset>
      <legend>Article</legend>
      <base-article :level="1">
        <template #category>
          Category
        </template>
        <template #headline>
          Headline
        </template>
        <template #subline>
          Subline
        </template>
        <template #default>
          Content
        </template>
      </base-article>
    </fieldset>

    <fieldset>
      <legend>Teaser (index)</legend>
      <teaser to="/">
        <template #category>
          Category
        </template>
        <template #headline>
          Headline
        </template>
        <template #subline>
          Subline
        </template>
        <template #default>
          Content
        </template>
      </teaser>
    </fieldset>
    <fieldset>
      <legend>Teaser (Editorial)</legend>
      <editorial v-bind="editorial" />
    </fieldset>
  </div>
</template>

<script>/* eslint-disable vue/no-unused-components */
import BaseArticle from '@foundation/core/Article';
import Teaser from '@foundation/core/Article/mutation/Teaser';
import Editorial from '@foundation/core/Article/mutation/Editorial';
export default {
  components: {
    BaseArticle,
    Teaser,
    Editorial
  },

  data () {
    return {
      editorial: {
        category: 'Category',
        headline: 'Headline',
        subline: 'Subline'
      }
    };
  }
};

</script>
