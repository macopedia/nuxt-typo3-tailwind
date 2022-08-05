<template>
  <t3-ce-textpic v-bind="$props" class="t3-ce-textmedia w-full mx-auto flex px-5 items-center justify-center flex-col prose " />
</template>
<script>
import T3CeTextmedia from 'nuxt-typo3/lib/components/T3CeTextmedia/T3CeTextmedia.vue'
export default {
  name: 'T3CeTextmedia',
  extends: T3CeTextmedia
}
</script>
