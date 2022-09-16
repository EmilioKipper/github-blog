import { createContext, ReactNode, useEffect, useState } from 'react'
import { getIssues, getUser } from '../service'

interface UserContextProviderProps {
  children: ReactNode
}

interface UserProps {
  avatar_url: string
  bio: string
  blog: string
  company: string
  created_at: string
  email: string | null
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string
  hireable: boolean | null
  html_url: string
  id: number
  location: string
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username: string
  type: string
  updated_at: string
  url: string
}

interface IssuesProps {
  title: string
  body: string
  html_url: string
  id: number
  user: UserProps
  updated_at: string
  comments: number
}

interface UserContextProps {
  user: UserProps
  issues: {
    items: IssuesProps[]
    total: number
  }
}

export const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState({} as UserProps)
  const [issues, setIssues] = useState([] as IssuesProps[])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getUser('EmilioKipper').then((res) => setUser(res.data))
    getIssues().then((res) => {
      setIssues(res.data.items)
      setTotal(res.data.total_count)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, issues: { items: issues, total } }}>
      {children}
    </UserContext.Provider>
  )
}
