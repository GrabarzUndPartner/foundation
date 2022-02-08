<template>
  <collapsible-container
    class="transformable"
    :hide-native-input="true"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #content="{option}">
      {{ option.content }}
    </template>
  </collapsible-container>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.transformable >>> {
  @nest .collapsible-container& {
    @media (--xs) {
      & label {
        flex-grow: 1;
        order: 0;
        width: auto;
      }

      & section {
        order: 1;
      }
    }
  }
}
</style>
