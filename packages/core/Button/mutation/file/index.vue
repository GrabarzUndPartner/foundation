<template>
  <base-button class="file-button" :class="classes" v-bind="$attrs" v-on="$listeners">
    <template #icon>
      <base-icon :size="iconSize">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374.116 374.116" style="enable-background: new 0 0 374.116 374.116;" xml:space="preserve"><path d="M344.058 207.506c-16.568 0-30 13.432-30 30v76.609h-254v-76.609c0-16.568-13.432-30-30-30-16.568 0-30 13.432-30 30v106.609c0 16.568 13.432 30 30 30h314c16.568 0 30-13.432 30-30V237.506c0-16.568-13.432-30-30-30 z" /><path d="m123.57 135.915 33.488-33.488v111.775c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30V102.426l33.488 33.488c5.857 5.858 13.535 8.787 21.213 8.787 7.678 0 15.355-2.929 21.213-8.787 11.716-11.716 11.716-30.71 0-42.426l-84.701-84.7c-11.715-11.717-30.711-11.717-42.426 0L81.144 93.489c-11.716 11.716-11.716 30.71 0 42.426 11.715 11.716 30.711 11.716 42.426 0 z" />
        </svg>
      </base-icon>
    </template>
    <template #default>
      <span v-if="label" v-html="label" />
      <input
        type="file"
        :accept="accept"
        @change="onChangeInput"
      >
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
    onChangeInput (e) {
      console.log('onChangeInput', e.target.files);
      this.$emit('change', e.target.files);
    }
  }
};
</script>

<style lang="postcss" scoped>
.file-button {
  position: relative;
  display: flex;
  align-items: center;

  &.style-reversed-order {
    flex-direction: row-reverse;
  }

  &.loading {
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

  &[disabled] {
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

  & input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
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
