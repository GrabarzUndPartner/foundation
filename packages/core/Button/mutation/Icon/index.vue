<template>
  <base-button class="icon-button" :class="classes" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <slot name="icon" :iconName="iconName">
        <base-icon :size="iconSize" />
      </slot>
      <slot name="default" :label="label">
        <span v-if="label" v-html="label" />
      </slot>
    </template>
  </base-button>
</template>

<script>
import BaseButton from '../../index';
import BaseIcon from '../../../Icon';

export default {
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    label: {
      type: String,
      default: null
    },
    iconName: {
      type: String,
      default: 'iconName'
    },
    iconSize: {
      type: String,
      default: 'xs'
    },
    reversedOrder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
  computed: {
    classes () {
      return {
        'style-reversed-order': this.reversedOrder
      };
    }
  },

  methods: {

  }
};
</script>

<style lang="postcss" scoped>
.icon-button {
  position: relative;
  display: flex;

  &.style-reversed-order {
    flex-direction: row-reverse;
  }

  &.style-loading {
    pointer-events: none;

    & > * {
      opacity: 0;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      box-sizing: border-box;
      width: 1em;
      height: 1em;
      content: "";
      border: 0.2em solid rgb(0 0 0 / 100%);
      border-top-color: rgb(0 0 0 / 30%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transform-origin: 50% 50%;
      animation: spin 0.5s infinite linear;
    }
  }

  &.style-disabled {
    & .icon {
      opacity: 0.5;
    }
  }

  & .icon {
    margin: 0 0.3em;

    &.xs {
      width: 1em;
    }

    &.sm {
      width: 2em;
    }

    &.md {
      width: 3em;
    }
  }

}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
