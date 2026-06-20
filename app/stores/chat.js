export const useChatStore = defineStore('chat', () => {
    const messages = ref([])
  
    function addMessage(message) {
      messages.value.push({
        id: Date.now(),
        ...message
      })
    }
  
    return {
      messages,
      addMessage
    }
  })