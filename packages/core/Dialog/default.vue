<template>
  <base-dialog v-bind="$attrs" v-on="$listeners">
    <template #default="{content, dialogName}">
      <slot name="default" :dialogName="dialogName" :content="content" />
    </template>
  </base-dialog>
</template>

<script>
import BaseDialog from './index';

export default {
  components: {
    BaseDialog
  },

  inheritAttrs: false
};
</script>
