<template>
  <ds-card :header="$t('admin.organizations.name')">
    <hc-empty icon="tasks" message="Coming Soon…" />
  </ds-card>
</template>

<script>
import HcEmpty from '~/components/Empty/Empty'

export default {
  components: {
    HcEmpty,
  },
}
</script>
