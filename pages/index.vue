<template>
  <div class="bg-white">
    <HeaderCta />

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Entra a far parte della nostra community su
            <a href="https://t.me/vue_ita" target="_blank" class="font-semibold text-indigo-600"
              ><span class="absolute inset-0" aria-hidden="true" />Telegram
              <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Vuejs Italia
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Sito ufficiale della community italiana di Vue.js.<br>
            Unisciti a noi
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://www.facebook.com/groups/997145120352550/" target="_blank" class="text-sm font-semibold leading-6 text-gray-900">Facebook <span aria-hidden="true">→</span></a>
            <a href="https://github.com/vuejsita/" target="_blank" class="text-sm font-semibold leading-6 text-gray-900">Github <span aria-hidden="true">→</span></a>
            <!-- <a href="#" target="_blank" class="text-sm font-semibold leading-6 text-gray-900">Linkedin <span aria-hidden="true">→</span></a> -->
            <a href="https://twitter.com/vuejsita" target="_blank" class="text-sm font-semibold leading-6 text-gray-900">Twitter <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
</script>