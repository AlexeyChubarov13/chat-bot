<script setup>
import ChatInput from '../ChatInput/ChatInput.vue';
</script>
<template>
    <div class="chat-popup">
        <div class="chat-popup__inner">
            <div class="chat-popup__header">
                <div class="chat-popup__title"><span>Ч</span>ат бот</div>
            </div>
            <div class="chat-popup__body">
                <div class="chat-popup__messeges">
                    <div class="chat-popup__messege --bot">hello world</div>
                    <div class="chat-popup__messege">hello world</div>
                </div>
                <ChatInput />
            </div>
        </div>
        <div class="chat-popup__close">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 2L14 14M2 26L14 14M14 14L2 2L26 26" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>
<style src="./__chat-popup.css" lang="css" />