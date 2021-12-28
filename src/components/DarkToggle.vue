<template>
  <t-button theme="default" style="vertical-align: middle;" size="large" variant="text" @click="toggleDark()">
    <div v-if="isDark">
      <span class="t-button__text">
        <MoonIcon />
      </span>
    </div>
    <div v-else>
      <span class="t-button__text">
        <SunIcon />
      </span>
    </div>
  </t-button>
</template>

<script setup lang='ts'>
import SunIcon from './SunIcon.vue'
import MoonIcon from './MoonIcon.vue'
import { isDark, toggleDark } from '~/composables'

</script>
