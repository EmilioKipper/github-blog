import axios from 'axios'

const username = 'EmilioKipper'
const repo = 'github-blog'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 2000,
})

export const getUser = (user: string) => api.get(`/users/${user}`)

export const getIssues = (searchTerm = '') =>
  api.get(`/search/issues?q=${searchTerm}%20repo:${username}/${repo}`)
