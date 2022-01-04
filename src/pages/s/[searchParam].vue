
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
      You searched
    </t-breadcrumbItem>
    <t-breadcrumbItem :max-width="'160'">
      {{ props.searchParam }}
    </t-breadcrumbItem>
  </t-breadcrumb>
  <ul>
    <t-loading v-if="searchByTitleData.isLoading" :loading="searchByTitleData.isLoading" text="Loading..." size="medium" />
    <template v-if="!searchByTitleData.isLoading">
      <template v-if="searchByTitleData.movies?.results && searchByTitleData.movies?.results.length > 0">
        <li v-for="movie in searchByTitleData.movies?.results" :key="movie.id" class="list-item">
          <div class="poster-wrapper">
            <img v-lazy="movie.image" class="poster" :alt="movie.title">
            <h3 class="text-center " :style="{color: isDark ? 'white' : '#202020'}">
              {{ movie.title }}
            </h3>
            <t-button variant="text" theme="default">
              {{ movie.description }}
            </t-button>
            <a :href="movieStore.movieUrl(movie.id)">
              <t-button variant="dashed" theme="success"> <t-icon name="link" /> IMDB </t-button>
            </a>
          </div>
        </li>
      </template>
      <template v-else>
        <t-button theme="default" variant="text">
          {{ !searchByTitleData.movies?.errorMessage ? 'No movie found' : searchByTitleData.movies?.errorMessage }}
        </t-button>
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMovie } from '../../store'
import { isDark } from '~/composables'
const movieStore = useMovie()
const { searchByTitleData } = storeToRefs(movieStore)
const props = defineProps<{ searchParam: string }>()
const router = useRouter()
const go = (searchParam: string) => {
  if (searchParam !== props.searchParam) {
    router.push(`/s/${encodeURIComponent(searchParam)}`)
    movieStore.setSearchParam(searchParam)
    movieStore.setSearchMovieResult()
  }
}
watchEffect(() => {
  movieStore.setSearchParam(props.searchParam)
  movieStore.setSearchMovieResult()
})
const colorByMode = computed(() => isDark.value ? '#2C3E50' : '#75b5f4a6')
</script>

<style>
ul {
  width: 100%;
  padding: 10px;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 180px);
}
li {
  list-style: none;
  margin-bottom: 2rem;
}

.poster-wrapper{
  display: grid;
  justify-items: center;
  width: 100%;
  max-width: 180px;
  height: 100%;
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
}
.poster-wrapper a {
  margin-top: 1rem;
}

.poster{
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: inherit;
}

img[lazy=loading]{
  background-image: url("../loading.svg");
  background-repeat: no-repeat;
  width: 180px;
  height: 227px;
  background-size: 30%;
  background-position: center;
  background-color: v-bind(colorByMode);

}

</style>
