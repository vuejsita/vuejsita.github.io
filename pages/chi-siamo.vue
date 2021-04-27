<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
      <!-- <ul v-for="user in users" :key="user.name">
          <li>
              <img :src="user.image" :alt="user.name" />
              <p>{{ user.name }}</p>
              <p>{{ user.description }}</p>

              <ul v-for="(link, name) in user.links" :key="name">
                  <li>{{ name }} : <a :href="link"> {{ link }} </a> </li>
              </ul>
          </li>
      </ul> -->
    <chi-siamo-card v-for="(user, i) in users" :key="i" v-bind="user" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
//   components: { ChiSiamo },
  name: 'AboutUsPage',

  asyncData: async ({ $content }: Context) => {
    const users = await $content('about-us').fetch()

    return { users }
  },
})
</script>

<style>
</style>
