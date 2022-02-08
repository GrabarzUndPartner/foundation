<template>
  <basic-slide class="molecule-slider-text-slide">
    <div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </basic-slide>
</template>

<script>

import BasicSlide from '@foundation/core/Slider/Slide';

export default {
  components: { BasicSlide }
};
</script>
<style lang="postcss" scoped>
.molecule-slider-text-slide {
  display: flex;
  padding: 2em;
  background: #ccc;

  & > div {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    padding: 1em;
    background: #fff;

  }
}
</style>
