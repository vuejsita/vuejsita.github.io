<template>
  <div id="home">
    <div>
      <Logo />
      <h1 class="mt-6">
        Vue.js Italia
      </h1>
      <h2 class="mt-3">
        Seguici su Telegram
      </h2>
      <SocialLink :to="telegram" />
      <SocialLink :to="twitter" />
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
