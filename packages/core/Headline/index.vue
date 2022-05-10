<template>
  <component
    :is="`h${currentHeadlineLevel}`"
    v-font="font"
    v-bind="$attrs"
    :title="`h${currentHeadlineLevel}`"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>

export default {

  inject: {
    parentLevel: {
      from: 'parentLevel',
      default: null
    }
  },

  inheritAttrs: false,

  props: {
    font: {
      type: [Object, Array],
      default () {
        return [];
      }
    },
    level: {
      type: [Number],
      default: null
    }
  },

  computed: {
    currentHeadlineLevel () {
      console.log(this.level, this.parentLevel);
      const result = this.level || this.parentLevel || 1;
      return getMax(result);
    }
  }
};

function getMax (number) {
  return Math.max(1, Math.min(number, 6));
}

</script>
