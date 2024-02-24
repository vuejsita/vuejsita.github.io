<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink
          class="-m-1.5 p-1.5"
          :to="{ name: 'index' }"
        >
          <span class="sr-only">Vue.js Italia</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="TailwindUI logo"
          >
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          type="button"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Apri / Chiudi menù di navigazione</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          class="text-sm font-semibold leading-6 text-gray-900"
          :to="item.to"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            class="-m-1.5 p-1.5"
            :to="{ name: 'index' }"
          >
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="TailwindUI logo"
            >
          </NuxtLink>
          <button
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            type="button"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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

<style lang="postcss" scoped></style>
