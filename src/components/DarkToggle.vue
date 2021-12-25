<template>
  <t-button theme="default" variant="text" @click="toggleDark()">
    <div v-if="isDark" class="toggle">
      <t-icon name="star-filled" />
    </div>
    <div v-else>
      <t-icon name="circle" class="toggle" />
    </div>
  </t-button>
</template>

<script setup lang='ts'>
import { isDark, toggleDark } from '~/composables'

</script>

<style scoped>
.toggle {
    display: flex;
    justify-content: space-around;
    align-items: center;

}
</style>
