<template>
  <base-accordeon
    class="molecule-accordeon"
    v-bind="$attrs"
    :dataset="getDataset"
    v-on="$listeners"
  >
    <template #label="{option}">
      <span
        v-font="$getFont('Poppins', 400)"
      >
        {{ option.label }}
      </span>
      <atom-icon icon="chevronRight" />
    </template>
    <template #content="{show, option}">
      <transition-expand>
        <section v-show="show">
          <layout-structure>
            <slot name="content" v-bind="{show, option}">
              <component :is="getContentComponent(component.type)" v-for="(component, index) in option.content" :key="index" v-bind="component.props" />
            </slot>
          </layout-structure>
        </section>
      </transition-expand>
    </template>
  </base-accordeon>
</template>

<script>
import BaseAccordeon from '@foundation/core/CollapsibleContainer/Accordeon';
import TransitionExpand from '@foundation/core/CollapsibleContainer/transition/expand';
import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';
import LayoutStructure from '@foundation/core/ContentContainer';
import AtomIcon from '@/components/atoms/Icon';

const CONTENT_COMPONENTS = {
  Headline: () => import('@/components/atoms/Headline'),
  RichText: () => import('@/components/atoms/RichText'),
  Link: () => import('@/components/atoms/Link'),
  Button: () => import('@/components/atoms/Button')
};

export default {
  components: { LayoutStructure, AtomIcon, BaseAccordeon, TransitionExpand },
  inheritAttrs: false,

  props: {
    items: {
      type: Array,
      required: true,
      default () {
        return [
          {
            label: 'Item 1',
            value: 'item1',
            content: [
              {
                type: 'RichText',
                props: {
                  text: 'Lorem Ipsum item 1'
                }
              }
            ]
          }
        ];
      }
    }
  },

  data () {
    return { unsubscribe: null };
  },

  computed: {
    getDataset () {
      return new Dataset(this.items, new Model('default-a', 'b'));
    }

  },

  mounted () {
    this.unsubscribe = this.$router.afterEach(() => {
      const model = this.dataset.model;
      model.value = null;
    });
  },

  destroyed () {
    this.unsubscribe();
  },

  methods: {
    getContentComponent (type) {
      return CONTENT_COMPONENTS[String(type)];
    }
  }
};

</script>

<style lang="postcss" scoped>
.molecule-accordeon {
  display: flex;
  flex-wrap: wrap;
  font-family: monospace;

  & >>> {
    & input:checked + label {
      & i {
        transform: rotate(90deg);
      }
    }

    & input:checked + label,
    & input:focus + label,
    & label:hover {
      color: #fff;
      background: #333;
    }

    & label {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      cursor: pointer;
      background: #eee;

      & i {
        order: 0;
        width: 22px;
        margin-right: 8px;
        transition: transform 0.2s;
      }

      & > span {
        flex: 1;
        order: 1;
        font-size: 14px;
        line-height: 1;
      }
    }
  }

  & > section {
    width: 100%;

    & > div {
      padding: 8px;
      border: solid #eee 1px;
      border-top-width: 0;
    }
  }
}
</style>
