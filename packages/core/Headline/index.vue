<template>
  <component
    :is="`h${currentHeadlineLevel}`"
    v-font="font"
    v-bind="$attrs"
    :data-debug="debug"
    v-on="$listeners"
  >
    <slot />
    <pre v-if="debug" :data-debug-level="currentHeadlineLevel" />
  </component>
</template>

<script>

export default {

  inject: {
    contextLevel: {
      from: 'contextLevel',
      default: 1
    }
  },

  inheritAttrs: false,

  props: {
    font: {
      type: [Object, Array],
      default () {
        return [];
      }
    }
  },

  computed: {
    debug () {
      return 'debug-headline' in this.$route.query;
    },
    currentHeadlineLevel () {
      return getMax(this.contextLevel);
    }
  }
};

function getMax (number) {
  return Math.max(1, Math.min(number, 6));
}

</script>

<style lang="postcss" scoped>
[data-debug] {
  position: relative;

  & pre {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    margin: 0;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
      pointer-events: none;
      content: "";
      border: dotted #333 2px;
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10000;
      padding: 10px 5px;
      font-size: 12px;
      color: white;
      content: "H" attr(data-debug-level);
      background: #333;
    }
  }
}
</style>
