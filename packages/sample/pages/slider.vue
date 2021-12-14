<template>
  <div>
    <fieldset>
      <legend>Slider</legend>
      <form>
        <base-slider v-bind="sliderData" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Pagination-Slider</legend>
      <form>
        <pagination-slider :slider-data="sliderData" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Slider with pointer navigation</legend>
      <form>
        <slider-with-pointer-navigation :slider-data="sliderData" />
      </form>
    </fieldset>
  </div>
</template>

<script>
import BaseSlider from '@foundation/core/Slider';
import PaginationSlider from '@foundation/core/Slider/mutation/Pagination';
import SliderWithPointerNavigation from '@foundation/core/Slider/mutation/SliderWithPointerNavigation';

export default {
  components: {
    BaseSlider,
    PaginationSlider,
    SliderWithPointerNavigation
  },
  data () {
    return {
      sliderData: {
        slides: [
          {
            copy: "I'm slide one. "
          },
          {
            copy: "I'm slide two. "
          },
          {
            copy: " I'm slide three."
          },
          {
            copy: "I'm slide four. "
          }

        ]
      }
    };
  },
  methods: {

  }
};
</script>

<style lang="postcss">
fieldset {
  display: block;
  width: 800px;
}
</style>
