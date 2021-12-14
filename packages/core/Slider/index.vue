<template>
  <vue-slick-carousel ref="swiper" class="slider" v-bind="sliderSettings" @afterChange="onAfterChange">
    <template v-if="$scopedSlots.prev" #prevArrow="arrowOption">
      <slot name="prev" :arrowOption="arrowOption" />
    </template>
    <template v-if="$scopedSlots.next" #nextArrow="arrowOption">
      <slot name="next" :arrowOption="arrowOption" />
    </template>
    <template v-if="$scopedSlots.pagination" #customPaging="page">
      <slot name="pagination" :page="page" />
    </template>

    <template #default>
      <slot v-for="(slide, index) in slides" :slide="slide" :index="index">
        <div :key="index" v-html="slide.copy" />
      </slot>
    </template>
  </vue-slick-carousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import PointerNavigation from './../mixins/PointerNavigation';

export default {
  components: { VueSlickCarousel },
  // mixins: [PointerNavigation],
  props: {
    settings: {
      type: Object,
      default () {
        return {};
      }
    },
    slides: {
      type: Array,
      default () {
        return [];
      }
    }
  },

  data () {
    return {
      activeSlide: 0,
      defaultSettings: {
        dots: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    };
  },
  computed: {
    sliderSettings () {
      return { ...this.defaultSettings, ...this.settings };
    }
  },

  mounted () {
    this.lala = 'base';
    console.log('mounted slider', this.lala);
    this.swiper = this.$refs.swiper;
  },

  methods: {
    onAfterChange (index) {
      this.$emit('afterChange', index);
    }
  }
};
</script>

<style lang="postcss" scoped>
.slider {
  display: block;
  width: 800px;
}
</style>
