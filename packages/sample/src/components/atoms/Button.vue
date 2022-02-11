<template>
  <base-button class="atom-button" :class="classes" v-bind="$attrs" v-on="$listeners">
    <atom-icon v-if="icon || loading" :icon="loading? 'loading' : icon" />
    <slot name="default" :label="label">
      <span v-if="label" v-html="label" />
    </slot>
    <slot name="after" />
  </base-button>
</template>

<script>
import BaseButton from '@foundation/core/Button';
import AtomIcon from '@/components/atoms/Icon';

export default {
  components: {
    BaseButton,
    AtomIcon
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
.atom-button {
  position: relative;
  display: flex;
  align-items: center;
  padding: em(8, 14) em(16, 14);
  font-size: em(14);
  line-height: 1;
  cursor: pointer;
  background: #fff;
  border: solid #aaa em(1, 14);
  appearance: none;

  &:not([disabled]):hover {
    background: #eee;
  }

  &.loading {
    pointer-events: none;

  }

  &[disabled] {
    cursor: not-allowed;

    & >>> .icon {
      opacity: 0.5;
    }
  }

  & >>> .icon {
    width: em(16, 14);
    margin-right: em(8, 14);
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
