<template>
  <base-link class="atom-link" :class="classes" v-bind="$attrs" :title="title" v-on="$listeners">
    <icon v-if="icon || loading" :icon="loading? 'loading' : icon" />
    <slot name="default">
      {{ title }}
    </slot>
    <slot name="after" />
  </base-link>
</template>

<script>
import BaseLink from '@foundation/core/Link';
import Icon from '@/components/atoms/Icon';

export default {
  components: {
    BaseLink,
    Icon
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: 'Sample Link'
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
.atom-link {
  position: relative;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  color: #000;

  &.loading {
    pointer-events: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
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
