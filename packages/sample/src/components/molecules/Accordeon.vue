<template>
  <base-accordeon class="button" :class="classes" v-bind="$attrs" v-on="$listeners">
    <icon v-if="icon || loading" :icon="loading? 'loading' : icon" />
    <slot name="default" :label="label">
      <span v-if="label" v-html="label" />
    </slot>
    <slot name="after" />
  </base-accordeon>
</template>

<script>
import BaseAccordeon from '@foundation/core/mutation/Accordeon';
import Icon from '@/components/atoms/Icon';

export default {
  components: {
    BaseAccordeon,
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
  padding: calc(8 / 14 * 1em) calc(16 / 14 * 1em);
  font-size: calc(14 / 16 * 1em);
  line-height: 1;
  cursor: pointer;
  background: #fff;
  border: solid #aaa calc(1 / 14 * 1em);
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
    width: 1em;
    margin-right: calc(8 / 14 * 1em);
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
