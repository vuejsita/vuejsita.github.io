<template>
  <div class="event">
    <div class="content">
      <div class="header">
        <h1 class="title">{{ event.title }}</h1>
        <h2 class="subtitle">{{ event.subtitle }}</h2>
      </div>
      <NuxtContent :document="event" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Event',
  props: {
    event: {
      required: true,
      type: Object,
    },
  },
})
</script>

<style lang="postcss" scoped>
.event {
  @apply pt-4;
}
.content {
  @apply bg-white max-w-sm mx-auto p-4 pt-16 relative rounded-xl shadow-md;
}
.header {
  @apply px-8 py-2 rounded-full shadow-lg text-white;

  /* Background */
  @apply bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500;

  /* Position */
  @apply absolute -top-4 -left-8;

  text-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
}
.title {
  @apply font-bold text-2xl;
}
.subtitle {
  @apply text-lg;
}
</style>
