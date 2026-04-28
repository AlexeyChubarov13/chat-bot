<script setup>
    import { ref } from 'vue';
    const message = ref('');

</script>
<template>
    <div class="chat-input">
        <textarea class="chat-input__textarea" id="new-message" v-model="message" placeholder="Напишите сообщение...">

        </textarea>
        <button class="chat-input__button">
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 0L33.6507 33.3989L19.3598 22.0709L34.1741 7.23366L11.6282 18.5066L0 13.9554L42 0Z" fill="#168DD9"/>
            <path d="M12.835 20.6551L16.8989 32.2743V21.053C22.5557 15.3876 21.6231 16.3215 21.7437 16.2007C19.088 17.5286 15.779 19.1831 12.835 20.6551Z" fill="#168DD9"/>
            <path d="M23.1747 28.2355L19.3594 32.274V25.2109L23.1747 28.2355Z" fill="#168DD9"/>
            </svg>
        </button>
    </div>
</template>
<style src="./__chat-input.css" lang="css" />