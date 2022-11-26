<template>
  <div class="fixed bottom-0">
    <div
      class="flex w-screen items-center bg-zinc-100 dark:bg-smoke-600 dark:text-white"
    >
      <img height="64" width="64" :src="spotify?.album_art_url" />
      <div class="ml-4 w-full text-sm">
        <div class="inline-block w-auto max-w-[50%]">
          <a
            class="block overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
            :href="`https://open.spotify.com/track/${spotify?.track_id}`"
          >
            {{ spotify?.song }}
          </a>
        </div>
        <div class="max-w-[50%]">
          <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">
            {{ spotify?.artist }}
          </h2>
        </div>
      </div>
      <div class="absolute right-0 mr-4">
        <i class="fa-brands fa-spotify text-2xl"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HydratedPresence } from "@/types/lanyard";
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  presence: {
    type: Object as PropType<HydratedPresence>,
    required: true,
  },
});

let spotify = computed(() => props.presence.presence?.spotify);
</script>
