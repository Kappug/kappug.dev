<template>
  <div
    class="flex h-screen flex-col items-center justify-center text-center dark:text-white md:text-left"
  >
    <div class="w-[80%] md:w-96">
      <h1 class="text-5xl font-bold">404</h1>
      <p class="mb-8 md:mb-4">
        The requested resource, <span class="font-bold">{{ $route.path }}</span
        >, could not be found on <span class="font-bold">kappug.dev</span>.
        Either I broke something, or you need some typing lessons.
      </p>
      <router-link
        to="/"
        class="duration-20 mt-3 rounded bg-black px-4 py-2 text-white transition-colors hover:bg-opacity-80 dark:bg-white dark:text-smoke-700"
        ><i class="fa-solid fa-arrow-left"></i> take me home!</router-link
      >
    </div>
  </div>
</template>
