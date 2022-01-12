
<template>
  <div>
    <fieldset>
      <legend>Base button</legend>
      <form>
        <core-button-base label="BaseButton" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Default button disabled</legend>
      <form>
        <core-button-default label="Disabled" :disabled="true" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button</legend>
      <form>
        <sample-button label="Label" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button disabled</legend>
      <form>
        <sample-button label="Disabled" disabled />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button loading</legend>
      <form>
        <sample-button label="Loading…" loading />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample file button </legend>
      <form>
        <sample-button-file label="File Upload" /><br>
        <sample-button-file label="Multiple File Upload" multiple />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample modal button </legend>
      <form>
        <base-dialog :name="dialogName" :prevent-default-opener="true">
          <template #default="{content}">
            <sample-button-modal :dialog-name="dialogName" :deep="new Deep(dialogName, false)" label="Modal Close" />
            <strong>Dialog Slot Content</strong>
            <hr>
            <strong>Button Content: </strong>{{ content }}
          </template>
        </base-dialog>
        <sample-button-modal :deep="new Deep(dialogName, true)" label="Modal" content="Dialog Content" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseDialog from '@foundation/core/Dialog';
import Deep from '@foundation/core/mutation/classes/Deep';

import CoreButtonBase from '@foundation/core/Button';
import CoreButtonDefault from '@foundation/core/Button/default';

import SampleButton from '@/components/atoms/Button';
import SampleButtonFile from '@/components/atoms/button/File';
import SampleButtonModal from '@/components/atoms/button/Modal';

export default {
  components: {
    BaseDialog,
    CoreButtonBase,
    CoreButtonDefault,
    SampleButton,
    SampleButtonFile,
    SampleButtonModal
  },
  data () {
    const dialogName = 'default';
    return {
      Deep,
      dialogName,
      iconButton: {
        iconName: 'check',
        label: 'IconButton'
      }
    };
  }
};

</script>
