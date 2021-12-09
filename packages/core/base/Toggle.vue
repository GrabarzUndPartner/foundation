<script>
export default {
  functional: true,

  props: {
    value: {
      type: Boolean,
      default: false
    },

    hideNativeInput: {
      type: Boolean,
      default: false
    }
  },

  render (createElement, context) {
    return [
      createElement('input', getInputOptions(context)),
      createElement('label', getLabelOptions(context), [context.scopedSlots.label()]),
      (context.scopedSlots.extend || function () { /* empty */ })()
    ];
  }
};

const getInputOptions = (context) => {
  return {
    class: { hidden: context.props.hideNativeInput },
    attrs: Object.assign(context.data.attrs, {
      type: 'checkbox',
      checked: context.props.value
    }),
    // all defined domProps will be updated by observers
    // the domProps should also defined as attrs for the initial state
    domProps: {
      checked: context.props.value,
      id: context.data.attrs.id
    },
    on: {
      input: (e) => {
        context.listeners.input(Boolean(e.target.checked));
      }
    }
  };
};

const getLabelOptions = (context) => {
  return {
    attrs: {
      for: context.data.attrs.id
    },
    domProps: {
      for: context.data.attrs.id
    }
  };
};
</script>

<style lang="postcss" scoped>
input.hidden {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
