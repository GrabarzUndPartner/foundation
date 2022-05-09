<template>
  <layout-lost-container class="organism-text-image" :class="{revert}">
    <layout-content>
      <div class="image">
        <speedkit-picture v-bind="image" />
      </div>
      <div class="text">
        <layout-content :disabled="true">
          <template #header>
            <sample-headline :text="headline" :overline="overline" />
          </template>
          <atom-rich-text :value="content" />
          <ul class="buttons">
            <li v-for="(button, index) in buttons" :key="index">
              <atom-button v-bind="button" />
            </li>
          </ul>
        </layout-content>
      </div>
    </layout-content>
  </layout-lost-container>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import LayoutContent from '@/components/layouts/Content';
import SampleHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';
import AtomButton from '@/components/atoms/Button';

export default {
  components: {
    SpeedkitPicture,
    LayoutLostContainer,
    LayoutContent,
    SampleHeadline,
    AtomRichText,
    AtomButton
  },
  props: {
    image: {
      type: Object,
      default () {
        return {
          title: 'TextImage',
          sources: [
            { src: '/img/1080x1080.jpg', sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' } }
          ]
        };
      }
    },
    overline: {
      type: String,
      default: 'Overline'
    },
    headline: {
      type: String,
      default: 'Headline'
    },
    content: {
      type: String,
      default: '<p>Text</p>'
    },
    revert: {
      type: Boolean,
      default: false
    },

    buttons: {
      type: Array,
      default () {
        return [{
          label: 'Mehr erfahren'
        }];
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-text-image {
  margin: em(32) 0;

  @media (--sm) {
    margin: em(48) 0;
  }

  & >>> .lost-flex-container {
    background: red;

    & > .layout-content {
      display: flex;
      flex-direction: column;

      @media (--sm) {
        flex-flow: row nowrap;
        align-items: center;
      }
    }
  }

  & .buttons {
    padding: 0;
    margin: 0;
    margin-top: em(32);
    list-style: none;

    & li {
      & > * {
        display: inline-block;
      }

      & + li {
        margin-top: em(8);
      }
    }

  }

  & .text,
  & .image {
    margin-bottom: em(32);

    @media (--sm) {
      margin-bottom: 0;
    }

    @media (--xs-max) {
      lost-offset: 1 / 12;
      lost-column: 10 / 12;
    }
  }

  & .text {
    @media (--sm-min-max) {
      lost-column: 5 / 12;
    }

    @media (--md) {
      lost-column: 6 / 12;
    }
  }

  & .image {
    @media (--sm-min-max) {
      lost-offset: 1 / 12;
      lost-column: 5 / 12;
    }

    @media (--md) {
      lost-column: 6 / 12;
    }
  }

  @media (--sm-min-max) {
    &.revert {
      & .text {
        text-align: right;
        lost-move: -5 / 12;
      }

      & .image {
        lost-move: 5 / 12;
      }

    }
  }

  @media (--md) {
    &.revert {
      & .text {
        text-align: right;
        lost-move: -6 / 12;
      }

      & .image {
        lost-move: 6 / 12;
      }

    }
  }

}

</style>
