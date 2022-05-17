<template>
  <content-container class="article" v-bind="$attrs" v-on="$listeners">
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <slot name="default" />
  </content-container>
</template>

<script>
import ContentContainer from '../ContentContainer';
export default {
  components: { ContentContainer },
  inheritAttrs: false
};
</script>
