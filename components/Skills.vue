<script setup>
import javascriptImage from "@/assets/techlogos/javascript.png";
import vueImage from "@/assets/techlogos/vue.png";
import tailwindImage from "@/assets/techlogos/tailwind.png";
const items = [
  { name: "JavaScript", image: javascriptImage },
  { name: "Vue", image: vueImage },
  { name: "TailwindCSS", image: tailwindImage },
  "Nuxt UI",
  "Nuxt",
  "Vitest",
];
</script>
<template>
  <div class="w-full flex justify-center">
    <UCarousel v-slot="{ item }" :items="items" class="w-96 flex ">
      <!-- <img :src="item" width="300" height="400" draggable="false" /> -->
      <div class="flex flex-col justify-center">
        <img class="w-32" :src="item.image" alt="" />
      </div>
    </UCarousel>
  </div>
</template>
