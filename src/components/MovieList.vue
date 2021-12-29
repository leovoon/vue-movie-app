<template>
  <div style="padding: 12px">
    <slot name="loading" />
    <template v-if="moviesByCategory.movies && moviesByCategory.movies.items.length > 0">
      <slot name="list" :movie="moviesByCategory.movies" />
    </template>
    <template v-else>
      <slot name="error" />
    </template>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  moviesByCategory: {
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
