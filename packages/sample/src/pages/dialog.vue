<template>
  <div>
    <fieldset>
      <legend>Dialog</legend>
      <base-dialog :name="dialogName" />
      <sample-link-modal :deep="dialogDeep" content="Dialog Content">
        Open
      </sample-link-modal>
    </fieldset>
    <fieldset>
      <legend>Menu Dialog</legend>
      <menu-dialog :name="menuDialogName">
        Menu Dialog
      </menu-dialog>
      <sample-link-modal :deep="menuDeep" content="Menu Content">
        Open
      </sample-link-modal>
    </fieldset>
  </div>
</template>

<script>
import BaseDialog from '@foundation/core/Dialog';
import Deep from '@foundation/core/mutation/classes/Deep';
import MenuDialog from '@foundation/core/Dialog/Menu';
import SampleLinkModal from '@/components/atoms/link/Modal';
export default {
  components: {
    BaseDialog,
    MenuDialog,
    SampleLinkModal
  },
  data () {
    const dialogName = 'default';
    const menuDialogName = 'menu';
    return {
      dialogName,
      dialogDeep: new Deep(dialogName, true),
      menuDialogName,
      menuDeep: new Deep(menuDialogName, true)
    };
  }
};

</script>
