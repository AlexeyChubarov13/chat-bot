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
      <svg width="42" height="34" class="chat-input__img" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 0L33.6507 33.3989L19.3598 22.0709L34.1741 7.23366L11.6282 18.5066L0 13.9554L42 0Z" fill="#168DD9"/>
        <path d="M12.835 20.6551L16.8989 32.2743V21.053C22.5557 15.3876 21.6231 16.3215 21.7437 16.2007C19.088 17.5286 15.779 19.1831 12.835 20.6551Z" fill="#168DD9"/>
        <path d="M23.1747 28.2355L19.3594 32.274V25.2109L23.1747 28.2355Z" fill="#168DD9"/>
      </svg>
    </button>
  </form>
</template>

<style src="./__chat-input.css"></style>
