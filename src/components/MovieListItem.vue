<template>
  <t-list-item v-for=" item in movie" :key="item.id">
    <a :href="movieStore.movieUrl(item.id)">
      <t-list-item-meta v-if="!item.rank" :image="item.image" :title="item.fullTitle" :description="item.plot">
        <template #description>
          <p>
            <t-tag theme="primary" style="font-size: small;">
              {{ item.releaseState }}
            </t-tag>
          </p>
          <p>{{ item.plot }}</p>
          <p>
            <t-tag v-for="(genre, idx) in item.genres.split(',')" :key="idx" style="font-size: small; margin-right: 6px;">
              <template #icon>
                <t-icon name="discount" />
                {{ genre }}
              </template>
            </t-tag>
            <t-tag style="font-size: small; margin-right: 6px;">
              <template #icon>
                <t-icon name="time" />
              </template>
              {{ item.runtimeStr }}
            </t-tag>
          </p>
        </template>
      </t-list-item-meta>
      <t-list-item-meta v-else :image="item.image" :title="item.title">
        <template #image>
          <img v-lazy="item.image" class="poster" :alt="item.title">

        </template>
        <template #description>
          Rank  <t-tag theme="danger" style="margin-right: 6px;">
            {{ item.rank }}
          </t-tag>
          <t-tag theme="primary">
            {{ item.gross }}
          </t-tag>
          <t-tag theme="warning">
            {{ item.weekend }}
          </t-tag>
        </template>
      </t-list-item-meta>
    </a>
  </t-list-item>
</template>

<script setup lang='ts'>
import { useMovie } from '~/store'
const movieStore = useMovie()

defineProps({
  movie: {
    type: Object,
  },

})
</script>

<style scoped>

</style>
