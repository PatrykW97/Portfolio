<script setup>
import bobologia1 from "./assets/images/bobologia1.png";
import bobologia2 from "./assets/images/bobologia2.png";
import bobologia3 from "./assets/images/bobologia3.png";
import bobologia4 from "./assets/images/bobologia4.png";
import bobologia5 from "./assets/images/bobologia5.png";
import artur1 from "./assets/images/artur1.png";
import artur2 from "./assets/images/artur2.png";
import artur3 from "./assets/images/artur3.png";
const projects = [
  {
    title: "bobologia.pl",
    description: "Lorem ipsum",
    images: [bobologia1, bobologia2, bobologia3, bobologia4, bobologia5],
    technology: ["Vue.js/Nuxt.js", "TailwindCSS"],
  },
  {
    title: "arturromanowski.pl",
    description: "Lorem ipsum",
    images: [artur1, artur2, artur3],
    technology: ["Vue.js/Nuxt.js", "TailwindCSS"],
  },
  {
    title: "Ecoapp",
    description: "Lorem ipsum",
    images: [artur1, artur2, artur3],
    technology: ["Vue.js/Nuxt.js", "TailwindCSS", "Pinia"],
  },
];
</script>

<template>
  <section
    v-for="(project, index) in projects"
    :key="index"
    class="bg-green-500 flex mb-4"
  >
    <div v-if="index % 2 != 0" class="flex w-full">
      <div class="w-1/2 bg-purple-500">
        <UCarousel
          v-slot="{ item }"
          :items="project.images"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"
          arrows
          indicators
        >
          <img :src="item" class="w-full" draggable="false" />
        </UCarousel>
      </div>
      <div class="w-1/2 bg-yellow-500 pl-8">
        <h1 class="font-bold text-2xl">{{ project.title }}</h1>
        <h2>{{ project.description }}</h2>
        <p v-for="tech in project.technology">- {{ tech }}</p>
      </div>
    </div>
    <div v-else class="flex w-full">
      <div class="w-1/2 bg-purple-500">
        <h1 class="font-bold text-2xl">{{ project.title }}</h1>
        <h2>{{ project.description }}</h2>
        <p v-for="tech in project.technology">- {{ tech }}</p>
      </div>
      <div class="w-2/3 bg-yellow-500 pl-8">
        <UCarousel
          v-slot="{ item }"
          :items="project.images"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"
          arrows
          indicators
        >
          <img :src="item" class="w-full" draggable="false" />
        </UCarousel>
      </div>
    </div>
  </section>
</template>
