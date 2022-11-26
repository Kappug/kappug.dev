<template>
  <a
    class="duration-20 mx-2 inline-block w-12 items-center justify-center rounded-full bg-zinc-100 py-3 text-center transition-colors hover:bg-zinc-200 dark:bg-smoke-600 dark:text-white dark:hover:bg-smoke-400"
    :href="link"
    ><i :class="icon"></i
  ></a>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
