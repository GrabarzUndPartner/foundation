<template>
  <component
    :is="component"
    type="button"
    class="file-select"
    v-bind="$attrs"
    v-on="{...$listeners, click: [onClick].concat($listeners.click || [])}"
  >
    <template v-if="$slots.default || $scopedSlots.default" #default="data">
      <slot v-bind="data" />
    </template>
  </component>
</template>

<script>

export default {

  inheritAttrs: false,

  props: {
    component: {
      type: [Function, Object],
      required: true
    },
    accept: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = this.accept;
      input.multiple = this.multiple;
      input.click();
      input.addEventListener('input', (e) => {
        this.$emit('files', (e.dataTransfer || e.target).files);
        input.remove();
      });
    }
  }
};
</script>
