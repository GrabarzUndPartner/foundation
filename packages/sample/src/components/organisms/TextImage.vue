<template>
  <core-structure>
    <layout-lost-container class="organism-text-image" :class="{revert}">
      <div class="image">
        <speedkit-picture v-bind="image" />
      </div>
      <div class="text">
        <core-structure embed>
          <template #header>
            <atom-headline v-bind="headline" />
          </template>
          <template #default>
            <atom-rich-text :value="content" />
            <ul class="buttons">
              <li v-for="(button, index) in buttons" :key="index">
                <atom-button v-bind="button" />
              </li>
            </ul>
          </template>
        </core-structure>
      </div>
    </layout-lost-container>
  </core-structure>
</template>

<script>
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import CoreStructure from '@foundation/core/Structure';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import AtomHeadline from '@/components/atoms/Headline';
import AtomRichText from '@/components/atoms/RichText';
import AtomButton from '@/components/atoms/Button';

export default {
  components: {
    SpeedkitPicture,
    LayoutLostContainer,
    CoreStructure,
    AtomHeadline,
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
    headline: {
      type: Object,
      default () {
        return {
          overline: 'Overline',
          text: 'Headline'
        };
      }
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
    display: flex;
    flex-direction: column;

    @media (--sm) {
      flex-flow: row nowrap;
      align-items: center;
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
