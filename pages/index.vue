<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title font-bold">Vue.js Italia</h1>
      <div class="links mt-4">
        <a
          href="https://t.me/vue_ita"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary mt-8">
          Community Telegram
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({
        value: false
    }),
    methods: {
        sample (): void {
            this.value = true;
        }
    }
});
</script>

<style>
/*
Button Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
