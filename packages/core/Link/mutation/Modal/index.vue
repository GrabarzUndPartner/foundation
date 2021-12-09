<template>
  <base-link class="modal" v-bind="{to: {query: {[deep.name]: deep.value}}, ...$attrs}" v-on="$listeners">
    <template #default>
      <slot name="default" />
    </template>
  </base-link>
</template>

<script>
import Deep from '../../classes/Deep';
import BaseLink from '../../index';

export default {

  components: {
    BaseLink
  },

  inheritAttrs: false,

  props: {

    deep: {
      type: Deep,
      required: true
    },

    content: {
      type: String,
      default: null
    }
  },

  watch: {
    '$route.query': {
      handler (query) {
        if (process.client && query[this.deep.name] === this.deep.value) {
          this.$store.commit(`dialog/${this.deep.name}/open`, this.content);
        }
      },
      immediate: true
    }
  }
};
</script>
