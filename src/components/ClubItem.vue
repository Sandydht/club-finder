<template>
  <div class="w-full rounded-md bg-white overflow-hidden shadow-md">
    <div class="overflow-hidden">
      <img :src="fanArt" :alt="name + ' image'" class="w-full h-full object-cover object-center">
    </div>
    <div class="p-5">
      <p data-test="club-name" class="font-bold text-xl">{{ name }}</p>
      <p data-test="club-stadium" class="mt-2 text-lg">{{ stadium }}</p>
      <p data-test="club-description" class="mt-2 text-md text-justify">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClubItem',
  props: {
    fanArt: String,
    name: String,
    stadium: String,
    description: String,
  },
};
</script>
