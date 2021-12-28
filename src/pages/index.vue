<template>
  <SearchInput @submit-search="go" />

  <t-tabs :value="tab" theme="normal" @change="handlerChange">
    <t-tab-panel value="first">
      <template #label>
        <t-icon name="precise-monitor" class="tabs-icon-margin" /> In theaters
      </template>
      <p style="padding: 12px;">
        <t-loading :loading="inTheatersData.isLoading" />
        <template v-if="inTheatersData.movies && inTheatersData.movies.items.length > 0">
          <t-list-item v-for="movie in inTheatersData.movies?.items" :key="movie.id" class="list-item">
            <a :href="movieStore.movieUrl(movie.id)">

              <t-list-item-meta :image="movie.image" :title="movie.fullTitle" :description="movie.plot">
                <template #description>
                  <p>
                    <t-tag theme="primary" style="font-size: small;">
                      {{ movie.releaseState }}
                    </t-tag>
                  </p>
                  <p>{{ movie.plot }}</p>
                  <p>
                    <t-tag v-for="(genre, idx) in movie.genres.split(',')" :key="idx" style="font-size: small; margin-right: 6px;">
                      <template #icon>
                        <t-icon name="discount" />
                        {{ genre }}
                      </template>
                    </t-tag>
                    <t-tag style="font-size: small; margin-right: 6px;">
                      <template #icon>
                        <t-icon name="time" />
                      </template>
                      {{ movie.runtimeStr }}
                    </t-tag>
                  </p>
                </template>
              </t-list-item-meta>
            </a>
          </t-list-item>
        </template>
        <template v-else>
          <t-button variant="text" theme="default">
            {{ inTheatersData.movies?.errorMessage }}
          </t-button>
        </template>
      </p>
    </t-tab-panel>
    <t-tab-panel value="second">
      <template #label>
        <t-icon name="calendar" class="tabs-icon-margin" /> Coming Soon
      </template>
      <p style="padding: 12px">
        <t-loading :loading="comingSoonData.isLoading" />
        <template v-if="comingSoonData.movies && comingSoonData.movies.items.length > 0">
          <t-list-item v-for="movie in comingSoonData.movies?.items" :key="movie.id" class="list-item">
            <a :href="movieStore.movieUrl(movie.id)">
              <t-list-item-meta :image="movie.image" :title="movie.fullTitle">
                <template #description>
                  <p>
                    <t-tag theme="warning" style="font-size: small;">
                      Release Date:  {{ movie.releaseState }}
                    </t-tag>
                  </p>
                  <p>{{ movie.plot }}</p>
                  <p>
                    <t-tag v-for="(genre, idx) in movie.genres.split(',')" :key="idx" style="font-size: small; margin-right: 6px;">
                      <template #icon>
                        <t-icon name="discount" />
                        {{ genre }}
                      </template>
                    </t-tag>
                    <t-tag style="font-size: small; margin-right: 6px;">
                      <template #icon>
                        <t-icon name="time" />
                      </template>
                      {{ movie.runtimeStr }}
                    </t-tag>
                  </p>
                </template>
              </t-list-item-meta>
            </a>
          </t-list-item>
        </template>
        <template v-else>
          <t-button variant="text" theme="default">
            {{ comingSoonData.movies?.errorMessage }}.
          </t-button>
        </template>
      </p>
    </t-tab-panel>
    <t-tab-panel value="third">
      <template #label>
        <t-icon name="star" class="tabs-icon-margin" /> Box Office
      </template>
      <p style="padding: 12px">
        <t-loading :loading="boxOfficeData.isLoading" />
        <template v-if="boxOfficeData.movies && boxOfficeData.movies.items.length > 0">
          <t-list-item v-for="movie in boxOfficeData.movies?.items" :key="movie.id" class="list-item">
            <a :href="movieStore.movieUrl(movie.id)">
              <t-list-item-meta :image="movie.image" :title="movie.title">
                <template #description>
                  Rank  <t-tag theme="danger" style="margin-right: 6px;">
                    {{ movie.rank }}
                  </t-tag>
                  <t-tag theme="primary">
                    {{ movie.gross }}
                  </t-tag>
                  <t-tag theme="warning">
                    {{ movie.weekend }}
                  </t-tag>
                </template>
              </t-list-item-meta>
            </a>
          </t-list-item>
        </template>
        <template v-else>
          <t-button variant="text" theme="default">
            {{ boxOfficeData.movies?.errorMessage }}
          </t-button>
        </template>
      </p>
    </t-tab-panel>
  </t-tabs>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMovie } from '~/store'
const movieStore = useMovie()
const { inTheatersData, comingSoonData, boxOfficeData } = storeToRefs(movieStore)
const tab = ref('first')
const handlerChange = (newValue: any) => {
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
