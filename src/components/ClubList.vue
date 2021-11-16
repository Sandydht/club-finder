<template>
  <div>
    <club-item
      v-for="(club, index) in clubs"
      :key="index"
      :fanArt="club.fanArt"
      :name="club.name"
      :stadium="club.stadium"
      :description="club.description"
    ></club-item>
  </div>
</template>

<script>
import ClubItem from '@/components/ClubItem.vue';

export default {
  name: 'ClubList',
  components: {
    ClubItem,
  },
  props: {
    clubs: Array,
  },
};
</script>
