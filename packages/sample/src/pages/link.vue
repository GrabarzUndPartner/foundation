
<template>
  <div>
    <fieldset>
      <legend>Base link</legend>
      <form>
        <core-link-base to="/" title="BaseLink (Internal)" />
      </form>
      <form>
        <core-link-base to="https://grabarzundpartner.de" title="BaseLink (External)" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Default link disabled</legend>
      <form>
        <core-link-default to="/" title="Disabled" :disabled="true">
          Link
        </core-link-default>
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample link only title</legend>
      <form>
        <sample-link to="/" title="Title Attribute Text" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample link with slot and title</legend>
      <sample-link to="/" title="Slot Text">
        Slot Title
      </sample-link>
    </fieldset>
    <fieldset>
      <legend>Sample link disabled</legend>
      <form>
        <sample-link to="/" title="Disabled" disabled />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample modal link </legend>
      <form>
        <base-dialog :name="dialogName" :prevent-default-opener="true">
          <template #default="{content}">
            <sample-link-modal :dialog-name="dialogName" :deep="new Deep(dialogName, false)" title="Modal Close" />
            <strong>Dialog Slot Content</strong>
            <hr>
            <strong>Link Content: </strong>{{ content }}
          </template>
        </base-dialog>
        <sample-link-modal :deep="new Deep(dialogName, true)" title="Modal Open" content="Dialog Content" />
      </form>
    </fieldset>
  </div>
</template>

<script>/* eslint-disable vue/no-unused-components */

import BaseDialog from '@foundation/core/Dialog';
import Deep from '@foundation/core/mutation/classes/Deep';

import CoreLinkBase from '@foundation/core/Link';
import CoreLinkDefault from '@foundation/core/Link/default';

import SampleLink from '@/components/atoms/Link';
import SampleLinkModal from '@/components/atoms/link/Modal';

export default {
  components: {
    BaseDialog,
    CoreLinkBase,
    CoreLinkDefault,
    SampleLink,
    SampleLinkModal
  },
  data () {
    const dialogName = 'default';
    return {
      Deep,
      dialogName,
      iconLink: {
        iconName: 'check',
        label: 'IconLink'
      }
    };
  }
};

</script>
