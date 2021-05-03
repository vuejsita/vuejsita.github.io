<template>
  <div id="home">
    <div>
      <Logo />
      <h1 class="mt-6">
        Vue.js Italia
      </h1>
      <h2 class="mt-3">
        Seguici su Telegram
        <fa-icon :icon="['fab', 'telegram-plane']"></fa-icon>
      </h2>
      <a
        href="https://t.me/vue_ita"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary mt-6">
        Unisciti al gruppo
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="postcss" scoped>
#home {
  @apply min-h-screen flex justify-center items-center text-center;
}
</style>
