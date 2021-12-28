<template>
  <div class="searchInputWrapper">
    <t-affix ref="affix" :offset-bottom="20">
      <t-input
        v-model="text"
        placeholder="Search movie"
        clearable
        @clear="() => text = ''"
        @enter="$emit('submitSearch', text)"
      />
    </t-affix>
  </div>
</template>

<script setup lang='ts'>
const text = ref('')

defineEmits(['submitSearch', 'clearInput'])
</script>
