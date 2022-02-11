<template>
  <base-slide v-bind="$attrs" v-on="$listeners">
    <div class="content">
      <div>
        <slot />
      </div>
    </div>
  </base-slide>
</template>

<script>

import BaseSlide from './index';

export default {
  components: { BaseSlide },
  inheritAttrs: false
};

</script>

<style lang="postcss" scoped>
.content {
  /* box-sizing: content-box; */
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    background: #ccc;

    @media (min-width: 768px) {
      aspect-ratio: 16 / 9;
    }
  }

}
</style>
