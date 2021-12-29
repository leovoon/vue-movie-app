<template>
  <div style="padding: 12px">
    <!-- <div class="loading-wrapper">
      <slot name="loading" />
    </div> -->
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
.loading-wrapper{
  width: 100%;
  display: grid;
  justify-content: center;
}
</style>
