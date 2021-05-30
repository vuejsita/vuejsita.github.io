<template>
  <a
    class="social-link"
    :href="link"
    target="_blank"
    rel="noopener noreferrer">
    <fa-icon :icon="icon" />
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
.social-link .svg-inline--fa {
  @apply text-4xl text-gray-500;
}
</style>
