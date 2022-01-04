<template>
  <form class="searchInputWrapper" @submit.prevent="$emit('submitSearch',text)">
    <t-input
      v-model="text"
      theme="default"
      size="medium"
      placeholder="Search movie"
      clearable
      @clear="() => text = ''"
      @enter="$emit('submitSearch', text)"
    />
  </form>
</template>

<script setup lang='ts'>
const text = ref('')

defineEmits(['submitSearch', 'clearInput'])
</script>
