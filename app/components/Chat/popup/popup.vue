<script setup>
const emit = defineEmits(['close'])
const { fetchOrganization } = useDadata()
const chatStore = useChatStore()

const messages = computed({
  get: () => chatStore.getMessages,
  set: (value) => chatStore.setMessages(value)
})

const isSearching = ref(false)
const isHistoryOpen = ref(false)

async function sendData(message) {
  chatStore.addMessage({
    type: 'user',
    text: message
  })

  const isInn = /^\d{10}(\d{2})?$/.test(message)

  if (!isInn) {
    chatStore.addMessage({
      type: 'bot',
      text: 'Введите ИНН из 10 или 12 цифр.'
    })
    return
  }

  isSearching.value = true

  const result = await fetchOrganization(message)
  const organization = result?.suggestions?.[0]

  if (!organization) {
  chatStore.addMessage({
    type: 'bot',
    text: 'Контрагент не найден.'
  })

  isSearching.value = false
  return
}

const counterparty = {
  name: organization.value,
  inn: organization.data?.inn,
  kpp: organization.data?.kpp,
  ogrn: organization.data?.ogrn,
  address: organization.data?.address?.value,
  manager: organization.data?.management?.name,
  status: organization.data?.state?.status
}

chatStore.addToHistory(counterparty)

  console.log(counterparty)


  chatStore.addMessage({
  type: 'bot',
  text: `
  Название: ${counterparty.name || 'не указано'}
  ИНН: ${counterparty.inn || 'не указан'}
  КПП: ${counterparty.kpp || 'не указан'}
  ОГРН: ${counterparty.ogrn || 'не указан'}
  Адрес: ${counterparty.address || 'не указан'}
  Руководитель: ${counterparty.manager || 'не указан'}
  Статус: ${counterparty.status || 'не указан'}
  `.trim()
})

  isSearching.value = false
}

</script>

<template>
  <div class="chat-popup">
    <div class="chat-popup__inner">
      <div class="chat-popup__header">
        <div class="chat-popup__title"><span>Ч</span>ат бот</div>

        <button class="chat-popup__history" type="button" @click="isHistoryOpen = !isHistoryOpen">
          {{ isHistoryOpen ? 'Назад' : 'История' }}
        </button>
      </div>

      <div class="chat-popup__body">
        <template v-if="!isHistoryOpen">
          <div class="chat-popup__wrapper">
            <div class="chat-popup__date">Сегодня</div>

            <div class="chat-popup__messeges">
              <div
                v-for="message in messages"
                :key="message.id"
                class="chat-popup__messege"
                :class="{ '--bot': message.type === 'bot' }"
              >
                {{ message.text }}
              </div>
            </div>

            <div v-if="isSearching" class="chat-popup__search">
              <Icon name="ui:watch" size="25" />
              <p class="chat-popup__info">Секунду, ищу контрагентов...</p>
            </div>
          </div>

          <ChatInput @send="sendData" />
        </template>

        <template v-else>
          <div class="chat-popup__history-view">

            <p v-if="!chatStore.history.length" class="chat-popup__history-empty">
              История пуста
            </p>


            <div v-for="item in chatStore.history" :key="item.inn" class="chat-popup__history-item">
              
              <p class="chat-popup__history-name">{{ item.name }}</p>
              <p class="chat-popup__history-inn">{{ item.inn }}</p>
              
            </div>
          </div>
        </template>


      </div>
    </div>

    <button class="chat-popup__close" type="button" aria-label="Закрыть чат" @click="emit('close')">
      <Icon name="ui:close" size="28" />
    </button>
  </div>
</template>

<style src="./__chat-popup.scss" lang="scss"></style>
