<template>
  <div class="w-full max-w-1440 mx-auto font-sans">
    <app-bar></app-bar>

    <div class="sticky top-0 max-w-screen-md mx-auto mt-2">
      <search-bar @handle-submit="submit"></search-bar>
    </div>

    <div class="max-w-screen-md mx-auto p-5">
      <club-list :clubs="data.clubs" v-show="!data.error"></club-list>
      <alert-message :message="data.message" v-show="data.error"></alert-message>
    </div>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import ClubList from '@/components/ClubList.vue';
import AlertMessage from '@/components/AlertMessage.vue';
import DataSource from '@/data/data-source';

export default {
  name: 'App',
  components: {
    AppBar,
    SearchBar,
    ClubList,
    AlertMessage,
  },
  methods: {
    submit(value) {
      DataSource.searchClub(value)
        .then((data) => {
          this.data = {
            error: false,
            message: 'success',
            clubs: data,
          };
        })
        .catch((error) => {
          this.data = {
            error: true,
            message: error,
            clubs: [],
          };
        });
    },
  },
  data() {
    return {
      data: {
        error: null,
        message: '',
        clubs: [],
      },
    };
  },
};
</script>
