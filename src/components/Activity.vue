<template>
  <div
    class="mx-auto my-5 flex h-28 w-[90%] flex-col rounded-md bg-zinc-200 pr-4 dark:bg-smoke-400"
  >
    <div class="mx-3 my-3 flex items-center">
      <img
        v-if="activity.assets?.large_image"
        :src="`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.webp`"
        :alt="activity.assets?.large_text"
        width="88"
        height="88"
        class="rounded"
      />
      <svg
        v-else
        aria-hidden="true"
        role="img"
        width="88"
        height="88"
        viewBox="0 0 40 40"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="currentColor"
            fill-opacity=".8"
            d="M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
          ></path>
          <rect
            width="38"
            height="38"
            x="1"
            y="1"
            stroke="currentColor"
            stroke-opacity=".4"
            stroke-width="2"
            rx="5"
          ></rect>
          <circle
            cx="7"
            cy="7"
            r="2"
            fill="currentColor"
            fill-opacity=".4"
          ></circle>
          <circle
            cx="7"
            cy="33"
            r="2"
            fill="currentColor"
            fill-opacity=".4"
          ></circle>
          <circle
            cx="33"
            cy="7"
            r="2"
            fill="currentColor"
            fill-opacity=".4"
          ></circle>
          <circle
            cx="33"
            cy="33"
            r="2"
            fill="currentColor"
            fill-opacity=".4"
          ></circle>
        </g>
      </svg>
      <div class="ml-4 min-w-0">
        <h1 class="overflow-hidden text-ellipsis whitespace-nowrap">
          {{ activity.name }}
        </h1>
        <h3 class="overflow-hidden text-ellipsis whitespace-nowrap font-light">
          {{ activity.details }}
        </h3>
        <h3 class="overflow-hidden text-ellipsis whitespace-nowrap font-light">
          {{ activity.state }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Activity } from "@/types/lanyard";

const props = defineProps({
  activity: {
    type: Object as PropType<Activity>,
    required: true,
  },
});
</script>
