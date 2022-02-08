<template>
  <article class="article" v-bind="$attrs" v-on="$listeners">
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <slot name="default" />
  </article>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>
