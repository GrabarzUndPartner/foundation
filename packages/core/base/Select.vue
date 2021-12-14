<script>
export default {
  functional: true,

  props: {
    option: {
      type: String,
      default: null
    },

    value: {
      type: String,
      default: null
    },

    hideNativeInput: {
      type: Boolean,
      default: false
    },

    unselectable: {
      type: Boolean,
      default: false
    }
  },

  render (createElement, context) {
    return [
      createElement('input', getInputOptions(context)),
      createElement('label', getLabelOptions(context), [context.scopedSlots.label()]),
      context.scopedSlots.extend()
    ];
  }
};

const getInputOptions = (context) => {
  return {
    class: { hidden: context.props.hideNativeInput },
    attrs: Object.assign(context.data.attrs, {
      type: 'radio',
      checked: isChecked(context)
    }),
    // all defined domProps will be updated by observers
    // the domProps should also defined as attrs for the initial state
    domProps: {
      value: context.props.option,
      checked: isChecked(context),
      id: context.data.attrs.id
    },
    on: {
      input: (e) => {
        context.listeners.input(e.target.value);
      },
      click: (e) => {
        if (isChecked(context) && context.props.unselectable) {
          context.data.on.input(null);
        } else {
          context.data.on.input(context.props.option);
        }
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

const isChecked = (context) => {
  return context.props.value === context.props.option && context.props.value !== null;
};
</script>

<style lang="postcss" scoped>
input.hidden {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
