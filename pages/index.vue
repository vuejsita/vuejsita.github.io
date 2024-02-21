<template>
  <div id="home-page">
    <NavbarHeader />
    <main class="hero">
      <div
        class="hero__background--top"
        aria-hidden="true"
      >
        <div class="hero__halo" />
      </div>
      <div class="hero__body">
        <div class="hero__call-to-action">
          <div class="hero__call-to-action__btn">
            Entra a far parte della nostra community su
            <a
              href="https://t.me/vue_ita"
              target="_blank"
            ><span
              class="hero__call-to-action__actor"
              aria-hidden="true"
            />Telegram
              <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="hero__content">
          <h1>
            Vue.js Italia
          </h1>
          <p>
            Sito ufficiale della community italiana di Vue.js.<br>
            Unisciti a noi!
          </p>
          <div class="hero__actions">
            <a
              href="https://www.facebook.com/groups/997145120352550/"
              target="_blank"
            >Facebook <span aria-hidden="true">→</span></a>
            <a
              href="https://github.com/vuejsita/"
              target="_blank"
            >GitHub <span aria-hidden="true">→</span></a>
            <a
              href="https://www.linkedin.com/company/vuejsita/"
              target="_blank"
            >LinkedIn <span aria-hidden="true">→</span></a>
            <a
              href="https://www.youtube.com/@vuejsita"
              target="_blank"
            >YouTube <span aria-hidden="true">→</span></a>
            <a
              href="https://twitter.com/vuejsita"
              target="_blank"
            >Twitter / X <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div
        class="hero__background--bottom"
        aria-hidden="true"
      >
        <div class="hero__halo" />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss" scoped>
#home-page {
  @apply bg-white;

  .hero {
    @apply relative isolate px-6 pt-14 lg:px-8;
  }

  .hero__background--top {
    @apply absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80;

    .hero__halo {
      @apply relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem];

      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }
  }
  .hero__background--bottom {
    @apply absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)];

    .hero__halo {
      @apply relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem];

      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }
  }

  .hero__body {
    @apply mx-auto max-w-2xl py-32 sm:py-48 lg:py-56;

    .hero__call-to-action {
      @apply hidden sm:mb-8 sm:flex sm:justify-center;
    }
    .hero__call-to-action__btn {
      @apply relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20;

      & > a {
        @apply font-semibold text-indigo-600;
      }

      .hero__call-to-action__actor {
        @apply absolute inset-0;
      }
    }

    .hero__content {
      @apply text-center;

      & > h1 {
        @apply text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl;
      }
      & > p {
        @apply mt-6 text-lg leading-8 text-gray-600;
      }
      .hero__actions {
        @apply mt-10 flex items-center justify-center gap-x-6;

        & > a {
          @apply text-sm font-semibold leading-6 text-gray-900;
        }
      }
    }
  }
}
</style>
