<template>
  <div
    class="min-h-[16rem] w-[80%] overflow-hidden rounded-lg bg-zinc-100 dark:bg-smoke-600 dark:text-white md:w-[28rem]"
  >
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="transform ease-out duration-300 translate-y-0 opacity-0"
      enter-to-class="translate-y-0 opacity-100 sm:translate-y-0"
      leave-active-class="transition opacity-100 ease-in duration-300"
      leave-to-class="opacity-0"
    >
      <div v-if="presence.presence">
        <div
          class="flex flex-col items-center justify-center md:flex-row md:justify-start"
        >
          <img
            :src="`https://cdn.discordapp.com/avatars/${presence.presence.discord_user.id}/${presence.presence.discord_user.avatar}.webp`"
            :alt="`${presence.presence.discord_user.username}\'s avatar`"
            width="86"
            height="86"
            class="relative my-6 mx-6 rounded-full"
          /><i
            :class="[
              'fa-circle',
              'fa-solid',
              'absolute',
              'ml-16',
              custom_status ? 'mt-2' : 'mt-8',
              'md:ml-[5.5rem]',
              'md:mt-16',
              'border-4',
              'rounded-full',
              'border-zinc-100',
              'bg-zinc-100',
              'dark:bg-smoke-600',
              'dark:border-smoke-600',
              getStatusCircle(presence.presence.discord_status),
              getStatusColor(presence.presence.discord_status),
            ]"
          >
          </i>
          <div class="mb-4 w-64 min-w-0 text-center md:mb-0 md:text-left">
            <h3 class="overflow-hidden text-ellipsis whitespace-nowrap">
              kappug#0001
            </h3>
            <h5
              class="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-600"
              v-if="custom_status"
            >
              <span v-if="custom_status.emoji"
                >{{ custom_status.emoji.name }}
              </span>
              {{ custom_status.state }}
            </h5>
          </div>
        </div>
        <div>
          <hr
            class="m-auto h-[2px] w-[90%] rounded-sm border-0 bg-zinc-200 dark:bg-smoke-400"
          />

          <!-- this works, no idea how -->

          <div
            v-if="activities?.length"
            v-for="activity in activities"
            :key="activity.id"
          >
            <Activity :activity="activity" />
          </div>
          <div v-else class="flex h-32 items-center justify-center text-center">
            <span class="text-zinc-300 dark:text-smoke-300"
              >not doing anything :c</span
            >
          </div>
        </div>
      </div>
      <div v-else class="flex h-full items-center justify-center">
        <Spinner />
        <span class="ml-2">{{ getLoadingMessage() }}</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { HydratedPresence } from "@/types/lanyard";
import { computed } from "vue";
import Spinner from "@/components/Spinner.vue";
import Activity from "@/components/Activity.vue";

const props = defineProps({
  presence: {
    type: Object as PropType<HydratedPresence>,
    required: true,
  },
});

let custom_status = computed(() =>
  props.presence.presence?.activities.find((a) => a.type === 4)
);

let activities = computed(() =>
  props.presence.presence?.activities?.filter((a) => a.type === 0)
);

const getStatusCircle = (status: string) => {
  if (status === "online") {
    return "fa-circle";
  } else if (status === "idle") {
    return "fa-stars";
  } else if (status === "dnd") {
    return "fa-circle-minus";
  } else if (status === "offline") {
    return "fa-circle-dot";
  }
};

const getStatusColor = (status: string) => {
  if (status === "online") {
    return "text-emerald-500";
  } else if (status === "idle") {
    return "text-yellow-500";
  } else if (status === "dnd") {
    return "text-red-500";
  } else if (status === "offline") {
    return "text-neutral-500";
  }
};

const getLoadingMessage = (): string => {
  let items = [
    "hang tight...",
    "just a sec...",
    "are we there yet?",
    "adjusting flux capacitor...",
    "99 bottles of beer on the wall...",
    "insert elevator music here...",
  ];

  return items[Math.floor(Math.random() * items.length)];
};
</script>
