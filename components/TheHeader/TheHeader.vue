<template>
  <header class="text-gray-600 body-font border-b border-gray-100 mb-8">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <NuxtLink :to="getHomeUrl()"
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <Logo width="100"/>
      </NuxtLink>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <template v-if="navMain.children">
        <nuxt-link
          class="mr-5"
          v-for="(item, key) in navMain.children"
          :key="key"
          :to="item.link"
        >
          {{ item.title }}
        </nuxt-link>
      </template>
      <T3LangSwitcher class="border-l border-gray-100 ml-4 pl-4"/>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
import urlMixin from '~typo3/mixins/utils/urls'
export default {
  mixins: [urlMixin],
  computed: {
    ...mapState({
      navMain: state => state.typo3.initial.navigation[0] || [] // get first instance from root
    })
  }
}
</script>
<style lang="postcss">
a:hover,
.nuxt-link-exact-active {
  @apply text-primary;
}
</style>
