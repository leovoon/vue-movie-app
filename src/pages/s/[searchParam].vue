
<template>
  <SearchInput @submit-search="go" />
  <t-breadcrumb theme="light" :max-item-width="'150'">
    <t-breadcrumbItem to="/" style="display: flex; align-items: center;">
      <div style="display: flex; align-items: center;">
        <t-icon name="home" />
        <span>
          Home
        </span>
      </div>
    </t-breadcrumbItem>
    <t-breadcrumbItem>
      you searched
    </t-breadcrumbItem>
    <t-breadcrumbItem :max-width="'160'">
      {{ prevSearch }}
    </t-breadcrumbItem>
  </t-breadcrumb>
  <ul>
    <t-loading v-if="searchByTitleData.isLoading" :loading="searchByTitleData.isLoading" text="Loading..." size="medium" />
    <template v-if="!searchByTitleData.isLoading">
      <li v-for="movie in searchByTitleData.movies?.results" :key="movie.id" class="list-item">
        <div class="poster-wrapper">
          <template v-if="searchByTitleData.movies?.results && searchByTitleData.movies?.results.length > 0">
            <img class="poster" :src="movie.image" :alt="movie.title">
            <t-button variant="text" theme="default">
              <strong>
                {{ movie.title }}
              </strong>
              {{ movie.description }}
            </t-button>
            <a :href="movieStore.movieUrl(movie.id)">
              <t-button variant="dashed" theme="success"> <t-icon name="link" /> IMDB </t-button>
            </a>
          </template>
          <template v-else>
            {{ searchByTitleData.movies?.errorMessage }}
          </template>
        </div>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMovie } from '../../store'

const movieStore = useMovie()
const { searchByTitleData } = storeToRefs(movieStore)
const props = defineProps<{ searchParam: string }>()
const prevSearch = computed(() => props.searchParam)
const router = useRouter()
const go = (payload: string) => {
  if (payload)
    router.push(`/s/${encodeURIComponent(payload)}`)
}
watchEffect(() => {
  movieStore.setSearchParam(props.searchParam)
  movieStore.setSearchMovieResult()
})
</script>

<style scoped>
ul {
  width: 100%;
  padding: 10px;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 320px);
}
li {
  list-style: none;
  margin-bottom: 2rem;
}

.poster-wrapper{
  display: grid;
  justify-items: center;
  width: 80vw;
  max-width: 320px;
  height: 100%;
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
}
.poster-wrapper a {
  margin-top: .5rem;
}

.poster{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
</style>
