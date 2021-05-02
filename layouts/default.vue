<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="postcss">
@layer base {
  @font-face {
    font-family: 'Quicksand';
    font-weight: 300;
    src: local('Quicksand'),
      url(~/assets/fonts/quicksand/300.woff2) format('woff2'),
      url(~/assets/fonts/quicksand/300.woff) format('woff');
  }
  @font-face {
    font-family: 'Quicksand';
    font-weight: 400;
    src: local('Quicksand'),
      url(~/assets/fonts/quicksand/400.woff2) format('woff2'),
      url(~/assets/fonts/quicksand/400.woff) format('woff');
  }
  @font-face {
    font-family: 'Quicksand';
    font-weight: 700;
    src: local('Quicksand'),
      url(~/assets/fonts/quicksand/700.woff2) format('woff2'),
      url(~/assets/fonts/quicksand/700.woff) format('woff');
  }

  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
}
</style>
