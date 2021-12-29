<template>
  <SearchInput @submit-search="go" />

  <t-tabs :value="tab" theme="normal" @change="handlerTabChange">
    <t-tab-panel v-for="({value, label, movies: moviesByCategory}, index) in tabs" :key="index" :value="value">
      <template #label>
        <t-icon name="precise-monitor" class="tabs-icon-margin" /> {{ label }}
      </template>
      <MovieList :movies-by-category="moviesByCategory" :label="label">
        <template #loading>
          <t-loading :loading="moviesByCategory.isLoading" />
        </template>
        <template #list="slotProps">
          <MovieListItem :movie="slotProps.movie?.items" />
        </template>
        <template #error>
          <t-button theme="default" variant="text">
            {{ moviesByCategory.movies?.errorMessage }}
          </t-button>
        </template>
      </MovieList>
    </t-tab-panel>
  </t-tabs>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMovie } from '~/store'
const movieStore = useMovie()
const { inTheatersData, comingSoonData, boxOfficeData } = storeToRefs(movieStore)
const tabs = ref([
  { value: 'first', label: 'In Theaters', movies: inTheatersData.value },
  { value: 'second', label: 'Coming Soon', movies: comingSoonData.value },
  { value: 'third', label: 'Box Office', movies: boxOfficeData.value },
])
const tab = ref('first')
const handlerTabChange = (newValue: string) => {
  tab.value = newValue
  if (newValue === 'first')
    movieStore.setInTheaters()
  else if (newValue === 'second')
    movieStore.setComingSoon()
  else if (newValue === 'third')
    movieStore.setBoxOffice()
}
onMounted(() => {
  movieStore.setInTheaters()
})

const router = useRouter()
const go = (payload: string) => {
  if (payload)
    router.push(`/s/${encodeURIComponent(payload)}`)
}

</script>

<style>
.tabs-icon-margin {
 margin-right: 6px;
}

</style>
