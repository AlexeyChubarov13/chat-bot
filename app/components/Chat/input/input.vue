<script setup>
const message = ref('')
const emit = defineEmits(['send'])

function sendMessage() {
  const value = message.value.trim()
  if (!value) return

  emit('send', value)
  message.value = ''
}
</script>

<template>
  <form class="chat-input" @submit.prevent="sendMessage">
    <textarea
      id="new-message"
      v-model="message"
      class="chat-input__textarea"
      placeholder="Напишите сообщение..."
      @keydown.enter.exact.prevent="sendMessage"
    />

    <button class="chat-input__button" type="submit" aria-label="Отправить сообщение">
      <Icon name="ui:button" size="38" class="chat-input__img" />
    </button>
  </form>
</template>

<style src="./__chat-input.css"></style>
