<template>
  <div>
    <div>
      <img :src="fanArt" :alt="name + ' image'">
    </div>
    <div>
      <p data-test="club-name">{{ name }}</p>
      <p data-test="club-stadium">{{ stadium }}</p>
      <p data-test="club-description">{{ description }}</p>
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
