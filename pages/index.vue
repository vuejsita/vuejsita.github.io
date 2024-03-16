<template>
  <div
    id="home-page"
    class="bg-white"
  >
    <NavbarHeader />
    <main class="relative isolate flex items-center justify-center h-svh overflow-hidden">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          id="hero__halo--top"
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#42b883] to-[#42b883] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div>
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Entra a far parte della nostra community su
            <a
              class="font-semibold text-indigo-600"
              href="https://t.me/vue_ita"
              target="_blank"
            ><span
              class="absolute inset-0"
              aria-hidden="true"
            />Telegram
              <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Vue.js Italia
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Sito ufficiale della community italiana di Vue.js.<br>
            Unisciti a noi!
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              class="text-sm font-semibold leading-6 text-gray-900"
              href="https://www.facebook.com/groups/997145120352550/"
              target="_blank"
            >Facebook <span aria-hidden="true">→</span></a>
            <a
              class="text-sm font-semibold leading-6 text-gray-900"
              href="https://github.com/vuejsita/"
              target="_blank"
            >GitHub <span aria-hidden="true">→</span></a>
            <a
              class="text-sm font-semibold leading-6 text-gray-900"
              href="https://www.linkedin.com/company/vuejsita/"
              target="_blank"
            >LinkedIn <span aria-hidden="true">→</span></a>
            <a
              class="text-sm font-semibold leading-6 text-gray-900"
              href="https://www.youtube.com/@vuejsita"
              target="_blank"
            >YouTube <span aria-hidden="true">→</span></a>
            <a
              class="text-sm font-semibold leading-6 text-gray-900"
              href="https://twitter.com/vuejsita"
              target="_blank"
            >Twitter / X <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          id="hero__halo--bottom"
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#42b883] to-[#42b883] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss" scoped>
#home-page {
  #hero__halo--top {
    clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
  }
  #hero__halo--bottom {
    clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
  }
}
</style>
