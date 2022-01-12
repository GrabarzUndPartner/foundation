<template>
  <collapsible-container
    class="accordeon"
    :hide-native-input="true"
    v-bind="$attrs"
    :collapsible="collapsible"
    v-on="$listeners"
  >
    <template #label="{option}">
      <slot name="label" :option="option">
        {{ option.label }}
      </slot>
    </template>
    <template #content="{option, show}">
      <slot name="content" :option="option" :show="show">
        <div v-if="option.show">
          {{ option.content }}
        </div>
      </slot>
    </template>
  </collapsible-container>
</template>

<script>
import CollapsibleContainer from '../../../CollapsibleContainer';

export default {
  components: {
    CollapsibleContainer
  },

  inheritAttrs: false,

  props: {
    collapsible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

