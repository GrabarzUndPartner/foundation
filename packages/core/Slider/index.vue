<template>
  <div>
    <div ref="slider">
      <slot name="beforeTrack" v-bind="{index, length, go, hasNext, hasPrev}" />
      <div class="splide__track">
        <slot name="beforeList" v-bind="{index, length, go, hasNext, hasPrev}" />
        <component :is="listTag" class="splide__list">
          <slot v-bind="{index, length, go, hasNext, hasPrev}">
            <base-slide>Slide 1</base-slide>
            <base-slide>Slide 2</base-slide>
            <base-slide>Slide 3</base-slide>
          </slot>
        </component>
        <slot name="afterList" v-bind="{index, length, go, hasNext, hasPrev}" />
      </div>
      <slot name="afterTrack" v-bind="{index, length, go, hasNext, hasPrev}" />
    </div>
  </div>
</template>

<script>
import { getSplide } from './utils';
import BaseSlide from './Slide';

export default {
  components: { BaseSlide },
  props: {
    // https://splidejs.com/guides/options/
    options: {
      type: Object,
      default () {
        return {
        };
      }
    },
    // https://splidejs.com/extensions/
    // Extension Intersection is builtin.
    extensions: {
      type: Object,
      default () {
        return {};
      }
    },
    listTag: {
      type: String,
      default: 'div'
    }
  },

  data () {
    return {
      ready: false,
      index: 0,
      go: null,
      states: null,
      splide: null,
      splideWrapper: { splide: null }
    };
  },

  computed: {
    isReady () {
      return this.splide?.state.is(this.states?.IDLE);
    },
    hasLoop () {
      return this.splide?.options.type === 'loop';
    },
    hasNext () {
      return this.hasLoop || (!this.hasLoop && this.index < this.length - 1);
    },
    hasPrev () {
      return this.hasLoop || (!this.hasLoop && this.index > 0);
    },
    length () {
      return (this.ready && this.splide.length) || 0;
    }
  },

  async mounted () {
    const { Splide, STATES, extensions } = await getSplide();
    const { Intersection } = extensions;
    this.states = STATES;
    this.splide = new Splide(this.$refs.slider, {
      ...this.options,
      pagination: false,
      arrows: false,
      intersection: {
        rootMargin: '0px',
        inView: {
          keyboard: true
        },
        outView: {
          keyboard: false
        }
      }
    });
    this.go = this.splide.go.bind(this.splide);
    this.splide.on('moved', index => (this.index = index));
    this.splide.on('mounted', () => {
      this.ready = true;
    });
    this.$nextTick(() => {
      this.splide.mount({ ...extensions, Intersection });
    });
  },

  destroyed () {
    this.splide.destroy();
  },

  methods: {
    onActiveSlide (index) {
      this.index = index;
    }
  }
};

</script>
