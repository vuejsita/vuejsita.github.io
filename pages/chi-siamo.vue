<template>
  <div>
      <ul v-for="user in users" :key="user.name">
          <li>
              <img :src="user.image" :alt="user.name" />
              <p>{{ user.name }}</p>
              <p>{{ user.description }}</p>

              <ul v-for="(link, name) in user.links" :key="name">
                  <li>{{ name }} : <a :href="link"> {{ link }} </a> </li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutUsPage',

  asyncData: async ({ $content }: Context) => {
    const users = await $content('about-us').fetch()

    return { users }
  },
})
</script>

<style>
</style>