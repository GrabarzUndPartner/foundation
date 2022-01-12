<template>
  <component
    :is="component"
    class="modal-opener"
    v-bind="{...$attrs, to: {query: {[deep.name]: deep.value}}}"
    v-on="$listeners"
  >
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </component>
</template>

<script>
import Deep from './classes/Deep';

export default {

  inheritAttrs: false,

  props: {

    component: {
      type: [Function, Object],
      required: true
    },

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
        if (process.client && (String(query[this.deep.name]) === 'true') === (String(this.deep.value) === 'true')) {
          this.$store.commit(`dialog/${this.deep.name}/open`, this.content);
        }
      },
      immediate: true
    }
  }
};
</script>
