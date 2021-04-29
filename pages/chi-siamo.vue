<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
    <chi-siamo-card v-for="(user, i) in users" :key="i" :user="user" />
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import { Context } from '@nuxt/types'
import Vue from 'vue'
import User from '~/types/User'

export default Vue.extend({
  name: 'AboutUsPage',

  asyncData: async ({ $content }: Context) => {
    const u = await $content('about-us').fetch()
    const users = u.map((us: IContentDocument) => ({
        image: us.image,
        name: us.name,
        description: us.description,
        links: us.links
      }))
    
    return { users }
  },
})
</script>

<style>
</style>
