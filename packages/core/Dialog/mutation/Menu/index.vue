<template>
  <base-dialog v-bind="$attrs" :prevent-default-opener="true" v-on="$listeners">
    <template #default="{content, dialogName}">
      <slot name="link" :dialogName="dialogName" :deep="deep">
        <mutation-modal-opener-to :component="Link" :dialog-name="dialogName" :deep="deep">
          Close
        </mutation-modal-opener-to>
      </slot>
      <slot name="default" :content="content">
        {{ content }}
      </slot>
    </template>
  </base-dialog>
</template>

<script>
import Deep from '../../../mutation/classes/Deep';
import Link from '../../../Link';
import MutationModalOpenerTo from '../../../mutation/ModalOpenerTo';
import BaseDialog from '../../index';

export default {
  components: {
    BaseDialog,
    MutationModalOpenerTo
  },

  data () {
    return {
      Link,
      deep: new Deep(this.$attrs.name)
    };
  }
};
</script>

<style>

</style>
