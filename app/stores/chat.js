export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
    { id: 1, type: 'bot', text: 'Напишите ИНН, и я найду контрагента.' }
    ],
    history: []
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
    },

    addToHistory(counterparty) {
      const exists = this.history.some((item) => item.inn === counterparty.inn)
    
      if (exists) return
    
      this.history.unshift(counterparty)
    
      if (this.history.length > 5) {
        this.history.pop()
      }
    }
  }
})