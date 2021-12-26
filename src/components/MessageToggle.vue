<template>
  <div id="t-demo-message-toggle" style="display:inline-block">
    <t-button theme="default" variant="text" @click="closeFunc">
      <div v-show="!msg" class="toggle">
        <t-icon name="info-circle" />
      </div>
      <div v-if="msg">
        <t-icon name="info-circle-filled" class="toggle" />
      </div>
    </t-button>
  </div>
</template>

<script setup lang='ts'>
import type { MessageInstance } from 'tdesign-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

const msg = ref<Promise<MessageInstance> | null>(null)

const closeFunc = () => {
  if (!msg.value) {
    msg.value = MessagePlugin.info({
      content: 'Movie data is from imdb',
      duration: 0,
      zIndex: 1001,
      attach: '#t-demo-message-toggle',
      // 关闭
      closeBtn: true,
    })
  }
  else {
    // 关键代码
    MessagePlugin.close(msg.value)
    msg.value = null
  }
}
</script>

<style scoped>
.t-demo-message {
    font-size: small !important;
}
</style>
