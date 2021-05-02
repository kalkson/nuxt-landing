import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
})

const baseURL = process.env.BASE_URL

const api = axios.create({
  baseURL,
  adapter: cache.adapter,
})

export const endpoints = {
  views: '/views',
}

export const getViews = () => {
  const views = api
    .get(endpoints.views)
    .then(({ data }) => data)
    .catch((err) => {
      throw err
    })

  return views
}
