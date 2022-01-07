<template>
  <base-button class="button" :class="classes" v-bind="$attrs" v-on="$listeners">
    <icon v-if="icon || loading" :icon="loading? 'loading' : icon" />
    <slot name="default" :label="label">
      <span v-if="label" v-html="label" />
    </slot>
    <slot name="after" />
  </base-button>
</template>

<script>
import BaseButton from '@foundation/core/Button';
import Icon from '../Icon';

export default {
  components: {
    BaseButton,
    Icon
  },
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    classes () {
      return {
        loading: this.loading
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;

  &.loading {
    pointer-events: none;

  }

  &[disabled] {
    & >>> .icon {
      opacity: 0.5;
    }
  }

  & >>> .icon {
    width: 1em;
    margin: 0 0.3em;
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
