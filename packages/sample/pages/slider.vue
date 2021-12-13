<template>
  <arrow-slider :slider-data="sliderData" />
</template>

<script>
import ArrowSlider from '@/components/ArrowSlider';

export default {
  components: {
    ArrowSlider
  },
  data () {
    return {
      sliderData: {
        slides: [
          {
            copy: "I'm slide one. This is a <a href=\"#\" target=\"_blank\">link</a>."
          },
          {
            copy: "I'm slide two. This is a <a href=\"#\" target=\"_blank\">link</a>."
          },
          {
            copy: "This is a <a href=\"#\" target=\"_blank\">link</a>. I'm slide three."
          },
          {
            copy: "I'm slide four. This is a <a href=\"#\" target=\"_blank\">link</a>."
          }

        ]
      }
    };
  },
  methods: {

  }
};
</script>
