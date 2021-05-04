<template>
  <div class="event">
    <div class="content">
      <div class="header">
        <h1 class="title">
          {{ event.title }}
        </h1>
        <h2 class="subtitle">
          {{ event.subtitle }}
        </h2>
      </div>
      <div>
        <ul>
          <li>
            {{ event.event.date | datetime }}
          </li>
          <li>
            <a :href="event.event.link">
              {{ event.event.link }}
            </a>
          </li>
          <li>
            {{ event.event.place }}
          </li>
        </ul>
      </div>
      <NuxtContent :document="event" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Event",
    filters: {
        datetime (value: string): string {
            const date = new Date(value);

            const day = ("0" + date.getDate()).slice(-2);
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();

            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);

            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }
    },
    props: {
        event: {
            required: true,
            type: Object
        }
    }
});
</script>

<style lang="postcss" scoped>
.event {
  @apply pt-4;
}
.content {
  @apply bg-white max-w-sm mx-auto p-4 pt-16 relative rounded-xl shadow-md;

  /* Animations */
  @apply transition-shadow;
}
.header {
  @apply px-8 py-2 rounded-full shadow-lg text-white;

  /* Background */
  @apply bg-gradient-to-r from-nuxt-light via-nuxt to-nuxt-dark;

  /* Position */
  @apply absolute -top-4 -left-8;

  /* Animations */
  @apply transition-transform;

  text-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
}
.content:hover {

  /* Animations */
  @apply shadow-2xl;
}
.content:hover > .header {

  /* Animations */
  @apply transform -rotate-6 -translate-x-12;
}

.title {
  @apply font-bold text-2xl text-white;
}
.subtitle {
  @apply text-lg text-white;
}
</style>
