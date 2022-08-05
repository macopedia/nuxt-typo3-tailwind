<template>
  <div class="t3-form-cta p-2 w-full">
    <button type="reset" class="flex mx-auto text-white bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      {{ i18n.resetButton }}
    </button>
    <button type="submit" :disabled="state.sending" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      {{ state.sending ? i18n.sendingLabel : i18n.submitButton }}
    </button>
  </div>
</template>
<script>

import T3FormCta from 'nuxt-typo3/lib/components/T3Form/T3FormCta/T3FormCta.vue'

export default {
  name: 'T3FormCta',
  extends: T3FormCta,
}
</script>

