export function useDadata() {
  async function fetchOrganization(query) {
    try {
      return await $fetch('/api/dadata', {
        method: 'POST',
        body: { query }
      })
    } catch (error) {
      console.error('Dadata request failed', error)
      return null
    }
  }

  return { fetchOrganization }
}
