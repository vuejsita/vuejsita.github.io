<template>
  <div id="home">
    <div>
      <Logo />
      <h1 class="mt-6">
        Vue.js Italia
      </h1>
      <a
        href="https://t.me/vue_ita"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary inline-block mt-6">
        <div class="flex items-center">
          <unicon name="telegram-alt"
                  fill="white"
                  class="mr-2" />
          Unisciti al gruppo
        </div>
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
