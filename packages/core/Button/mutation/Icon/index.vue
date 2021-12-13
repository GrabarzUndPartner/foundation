<template>
  <base-button class="icon-button" v-bind="$attrs" v-on="$listeners">
    <template #default>
      <slot name="icon" :iconName="iconName">
        <base-icon class="icon" />
      </slot>
      <slot name="default" :label="label">
        <span class="label" v-html="label" />
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
      default: 'Label'
    },
    iconName: {
      type: String,
      default: 'iconName'
    }
  },
  data () {
    return {
    };
  },

  methods: {

  }
};
</script>

<style lang="postcss" scoped>
.icon-button {
  & .icon {
    width: 2em;
  }
}
</style>
