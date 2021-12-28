<template>
  <t-button theme="default" size="large" variant="text" @click="toAbout">
    <t-icon name="info-circle" />
  </t-button>
</template>

<script setup lang='ts'>
const router = useRouter()
const toAbout = () => {
  router.push('/About')
}
</script>
