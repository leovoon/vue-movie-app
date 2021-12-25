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
      // 层级控制：非当前场景自由控制开关的关键代码，仅用于测试 API 是否运行正常
      zIndex: 1001,
      // 挂载元素控制：非当前场景自由控制开关的关键代码，仅用于测试 API 是否运行正常
      attach: '#t-demo-message-toggle',
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
