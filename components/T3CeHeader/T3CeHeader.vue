<template>
  <div
    v-if="header && headerLayout !== 100"
    :class="headerCss"
    class="t3-ce-header prose"
  >
    <component
      :is="`h${headerLevel}`"
      v-if="headerLayout >= 0 && headerLayout !== 100"
      :class="headerPosition"
    >
      <t3-nav-link v-if="headerLink" :to="headerLink.href">
        {{ header }}
      </t3-nav-link>
      <template v-else>
        {{ header }}
      </template>
    </component>
    <component :is="`h${headerLevel + 1}`" v-if="subheader">
      {{ subheader }}
    </component>
  </div>
</template>

<script>
import T3CeHeader from 'nuxt-typo3/lib/components/T3CeHeader/T3CeHeader.vue'
export default {
  name: 'T3CeHeader',
  extends: T3CeHeader,
}
</script>
