<template>
  <div style="padding: 12px">
    <slot name="loading" />
    <template v-if="movies.movies && movies.movies.items.length > 0">
      <slot name="list" />
    </template>
    <template v-else>
      <slot name="error" />
    </template>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  movieStore: {
    type: Object,
    default: () => ({
      movieUrl: (id: string) => `/movie/${id}`,
    }),
  },
  movies: {
    type: Object,
    default: () => ({
      isLoading: true,
      movies: null,
      errorMessage: null,
    }),
  },
  comingSoonData: {
    type: Object,
    default: () => ({
      isLoading: true,
      movies: null,
      errorMessage: null,
    }),
  },
  boxOfficeData: {
    type: Object,
    default: () => ({
      isLoading: true,
      movies: null,
      errorMessage: null,
    }),
  },
})
</script>

<style scoped>

</style>
