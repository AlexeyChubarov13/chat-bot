<script setup>
const isOpen = ref(false)
</script>

<template>
  <div class="chat">
    <button class="chat__button" type="button" @click="isOpen = !isOpen">
      <Icon name="ui:logo" size="22" />
    </button>

    <ChatPopup v-if="isOpen" @close="isOpen = false" />
  </div>
</template>

<style src="./__chat.css"></style>
