<template>
  <base-headline class="design-default" v-bind="$attrs" v-on="$listeners">
    <slot />
  </base-headline>
</template>

<script>

import BaseHeadline from './index';

export default {
  components: {
    BaseHeadline
  },
  inheritAttrs: false
};

</script>

<style lang="postcss" scoped>
.design-default {
  font-family: monospace;
}

h1 {
  margin: 10px;
  margin-bottom: 20px;
  font-size: 48px;
}

h2 {
  margin: 10px;
  margin-bottom: 20px;
  font-size: 32px;
}

h3 {
  margin: 10px;
  margin-bottom: 20px;
  font-size: 24px;
}

h4 {
  margin: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}

h5 {
  margin: 10px;
  font-size: 16px;
}

h6 {
  margin: 10px;
  font-size: 12px;
}

</style>
