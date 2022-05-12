<template>
  <div>
    <div ref="slider" class="splide">
      <slot name="beforeTrack" v-bind="{splideId, index, length, go, hasNext, hasPrev}" />
      <div :id="`${splideId}-track`" class="splide__track">
        <slot name="beforeList" v-bind="{splideId, index, length, go, hasNext, hasPrev}" />
        <component :is="listTag" class="splide__list">
          <slot v-bind="{splideId, index, length, go, hasNext, hasPrev}">
            <base-slide :index="0" :splide-id="splideId">
              Slide 1
            </base-slide>
            <base-slide :index="1" :splide-id="splideId">
              Slide 2
            </base-slide>
            <base-slide :index="2" :splide-id="splideId">
              Slide 3
            </base-slide>
          </slot>
        </component>
        <slot name="afterList" v-bind="{splideId, index, length, go, hasNext, hasPrev}" />
      </div>
      <slot name="afterTrack" v-bind="{splideId, index, length, go, hasNext, hasPrev}" />
    </div>
  </div>
</template>

<script>
import { getSplide } from './utils';
import BaseSlide from './Slide';

let sliderIndex = 1;
export default {
  components: { BaseSlide },
  props: {
    // https://splidejs.com/guides/options/
    options: {
      type: Object,
      default () {
        return {};
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
      splideId: null,
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

  created () {
    this.splideId = `splide${String(sliderIndex).padStart(2, '0')}`;
    sliderIndex++;
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
      this.splideId = this.splide.root.id;
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
