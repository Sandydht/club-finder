<template>
  <div>
    <app-bar></app-bar>
    <search-bar @handle-submit="submit"></search-bar>
    <club-list :clubs="data.clubs" v-show="!data.error"></club-list>
    <alert-message :message="data.message" v-show="data.error"></alert-message>
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
