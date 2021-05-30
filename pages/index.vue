<template>
  <div id="home">
    <div>
      <Logo />
      <h1 class="mt-6">
        Vue.js Italia
      </h1>
      <h3 class="my-3">
        Unisciti a noi
      </h3>
      <SocialLink class="mx-2"
                  :to="telegram" />
      <h3 class="my-3">
        Rimani aggiornato sulle ultime novità
      </h3>
      <SocialLink class="mx-2"
                  :to="twitter" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SocialLink, { Socials } from "~/components/SocialLink.vue";

export default Vue.extend({
    components: { SocialLink },
    data: () => ({
        telegram: Socials.Telegram,
        twitter: Socials.Twitter
    })
});
</script>

<style lang="postcss" scoped>
#home {
  @apply min-h-screen flex justify-center items-center text-center;
}
</style>
