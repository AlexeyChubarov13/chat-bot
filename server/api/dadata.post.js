const URL_DADATA = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'

export default defineEventHandler(async (event) => {
  const { dadataApiKey } = useRuntimeConfig()
  const body = await readBody(event)
  const query = String(body?.query || '').trim()

  if (!query) {
    throw createError({
      statusCode: 400,
      statusMessage: 'INN is required'
    })
  }

  if (!dadataApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'DADATA_API_KEY is not configured'
    })
  }

  return await $fetch(URL_DADATA, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${dadataApiKey}`
    },
    body: { query }
  })
})
