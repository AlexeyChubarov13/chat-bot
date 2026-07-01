export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
    { id: 1, type: 'bot', text: 'Напишите ИНН, и я найду контрагента.' }
    ]
  }),

  getters: {
    getMessages: (state) => state.messages
  },

  actions: {
    setMessages(messages) {
      this.messages = messages
    },

    addMessage(message) {
      this.messages.push({
        id: Date.now(),
        ...message
      })
    }
  }
})