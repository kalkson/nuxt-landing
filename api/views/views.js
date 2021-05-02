import axios from 'axios'

const baseURL = process.env.BASE_URL

const api = axios.create({
  baseURL,
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
