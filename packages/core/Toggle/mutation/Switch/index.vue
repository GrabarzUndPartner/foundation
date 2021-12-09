<template>
  <base-toggle class="switch" :hide-native-input="true" v-bind="$attrs">
    <template #label="{option}">
      <span class="slider round" />
      {{ option.label }}
    </template>
    <template #content="{option}">
      {{ option.content }}
    </template>
  </base-toggle>
</template>

<script>
import BaseToggle from '../../index';

export default {

  components: { BaseToggle },

  inheritAttrs: false

};
</script>

<style lang="postcss" scoped>
.switch {
  & .slider {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    vertical-align: middle;
    cursor: pointer;
    background-color: #ccc;
    transition: 0.4s;

    &::before {
      position: absolute;
      bottom: 4px;
      left: 4px;
      width: 26px;
      height: 26px;
      content: "";
      background-color: white;
      transition: 0.4s;
    }

    &.round {
      border-radius: 34px;

      &::before {
        border-radius: 50%;
      }
    }
  }

  & >>> input {
    &:focus + label .slider {
      box-shadow: 0 0 5px #2196f3;
    }

    &:checked + label .slider {
      background-color: #2196f3;

      &::before {
        transform: translateX(26px);
      }
    }
  }
}
</style>
