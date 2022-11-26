<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <Card :presence="presence" />
    <div class="mt-8 text-center">
      <Link
        icon="fa-brands fa-twitter"
        link="https://twitter.com/anotherkappug"
      />
      <Link icon="fa-brands fa-github" link="https://github.com/Kappug" />
      <Link
        icon="fa-brands fa-discord"
        link="https://discord.com/users/715541337549570114"
      />
    </div>
  </div>

  <transition
    enter-active-class="duration-300 transition delay-300 opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0"
  >
    <Bar v-if="presence.presence?.spotify" :presence="presence" />
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Bar from "@/components/Bar.vue";
import type { Ref } from "vue";
import type { Message, HydratedPresence } from "@/types/lanyard";
import { Opcode } from "@/types/lanyard";
import Card from "@/components/Card.vue";
import Link from "@/components/Link.vue";

let socket = new WebSocket("wss://api.lanyard.rest/socket");
let id = "715541337549570114";
let presence: Ref<HydratedPresence> = ref({ hydrated: false });

socket.addEventListener("message", ({ data }) => {
  let message: Message = JSON.parse(data);

  switch (message.op) {
    case Opcode.Event: {
      if (message.d) {
        presence.value = {
          hydrated: true,
          presence: message.d,
        };
      }

      break;
    }
    case Opcode.Hello: {
      setInterval(() => {
        socket.send(JSON.stringify({ op: Opcode.Heartbeat }));
      }, message.d?.heartbeat_interval);

      socket.send(
        JSON.stringify({
          op: Opcode.Initialize,
          d: {
            subscribe_to_id: id,
          },
        })
      );

      break;
    }
    default:
      break;
  }
});
</script>
