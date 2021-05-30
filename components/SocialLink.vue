<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link">
    <fa-icon :icon="icon"
             size="xl" />
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import {
    faTelegramPlane,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

export enum Socials {
  Telegram,
  Twitter
}

export default Vue.extend({
    name: "SocialLink",
    props: {
        to: {
            required: true,
            type: Number as PropType<Socials>
        }
    },
    computed: {
        icon () {
            switch (this.to) {
                case Socials.Telegram:
                    return faTelegramPlane;
                case Socials.Twitter:
                    return faTwitter;
                default:
                    return null;
            }
        },
        link (): string {
            switch (this.to) {
                case Socials.Telegram:
                    return "https://t.me/vue_ita";
                case Socials.Twitter:
                    return "https://twitter.com/vuejsita?s=09";
                default:
                    return "#";
            }
        }
    }
});
</script>

<style lang="postcss" scoped>
.social-link {
  @apply text-gray-500 rounded-full h-24 w-24;
}
</style>
