<template>
  <div id="events-page">
    <Event v-for="(event, index) in events"
           :key="index"
           :event="event" />
  </div>
</template>

<script lang="ts">
import { IContentDocument } from "@nuxt/content/types/content";
import { Context } from "@nuxt/types";
import Vue from "vue";

interface EventsPageAsyncData {
  events?: IContentDocument[]
}
interface EventsPageData extends EventsPageAsyncData {}

export default Vue.extend({
    name: "EventsPage",

    asyncData: async ({ $content }: Context) => {
        const events = await $content("events").sortBy("event.date", "desc").fetch();

        return { events };
    },
    data: (): EventsPageData => ({})
});
</script>

<style lang="postcss" scoped>
#events-page {
  @apply container mx-auto p-4;
}

.event {
  @apply mb-4;
}
</style>
