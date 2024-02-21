<template>
  <header class="navbar-header">
    <nav
      class="navbar"
      aria-label="Global"
    >
      <div class="navbar__logo">
        <NuxtLink
          class="navbar__logo__link"
          :to="{ name: 'index' }"
        >
          <span class="navbar__text--hidden">Vue.js Italia</span>
          <img
            class="navbar__image"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="TailwindUI logo"
          >
        </NuxtLink>
      </div>
      <div class="navbar__toggle">
        <button
          type="button"
          @click="mobileMenuOpen = true"
        >
          <span class="navbar__text--hidden">Apri / Chiudi menù di navigazione</span>
          <Bars3Icon
            class="navbar__toggle__icon"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="navbar__links">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
    <Dialog
      as="div"
      class="navbar__dialog"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="dialog__overlay" />
      <DialogPanel
        class="dialog__panel"
      >
        <div class="dialog__header">
          <NuxtLink
            class="navbar__logo__link"
            :to="{ name: 'index' }"
          >
            <span class="navbar__text--hidden">Your Company</span>
            <img
              class="navbar__image"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="TailwindUI logo"
            >
          </NuxtLink>
          <button
            type="button"
            @click="mobileMenuOpen = false"
          >
            <span class="navbar__text--hidden">Close menu</span>
            <XMarkIcon
              class="navbar__toggle__icon"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="dialog__body">
          <div class="dialog__content">
            <div class="dialog__links">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Manifesto", to: "#manifesto" },
  { name: "Eventi", to: "#events" },
  { name: "Community", to: "#communities" },
  { name: "Blog", to: "#blog" },
];

const mobileMenuOpen = ref(false);
</script>

<style lang="postcss" scoped>
.navbar-header {
  @apply absolute inset-x-0 top-0 z-50;

  .navbar {
    @apply flex items-center justify-between p-6 lg:px-8;
  }

  .navbar__logo {
    @apply flex lg:flex-1;

    & > a {
      @apply -m-1.5 p-1.5;
    }
  }
  .navbar__logo__image {
    @apply h-8 w-auto;
  }

  .navbar__toggle {
    @apply flex lg:hidden;

    & > button {
      @apply -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700;
    }
  }

  .navbar__links {
    @apply hidden lg:flex lg:gap-x-12;

    & > a {
      @apply text-sm font-semibold leading-6 text-gray-900;
    }
  }
}

.navbar__dialog {
  @apply lg:hidden;

  .dialog__overlay {
    @apply fixed inset-0 z-50;
  }
  .dialog__panel {
    @apply fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10;

    .dialog__header {
      @apply flex items-center justify-between;

      & > a {
        @apply -m-1.5 p-1.5;
      }
      & > button {
        @apply -m-2.5 rounded-md p-2.5 text-gray-700;
      }
    }
    .dialog__body {
      @apply mt-6 flow-root;

      .dialog__content {
        @apply -my-6 divide-y divide-gray-500/10;

        .dialog__links {
          @apply space-y-2 py-6;

          & > a {
            @apply -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50;
          }
        }
      }
    }
  }
}

.navbar__logo__link {
  @apply -m-1.5 p-1.5;
}
.navbar__text--hidden {
  @apply sr-only;
}
.navbar__image {
  @apply h-8 w-auto;
}

.navbar__toggle__icon {
  @apply h-6 w-6;
}
</style>
