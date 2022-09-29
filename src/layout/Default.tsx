import { useContext } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { UserContext } from '../contexts/UserContext'

export const DefaultLayout = () => {
  const params = useParams()
  const {
    issues: { items },
  } = useContext(UserContext)

  const currentPost = items.find((issue) => issue.id === Number(params.id))

  return (
    <>
      {currentPost ? (
        <Header
          post={{
            title: currentPost.title,
            comments: currentPost.comments,
            owner: currentPost.user.login,
            publishedDate: currentPost.updated_at,
            link: currentPost.html_url,
          }}
        />
      ) : (
        <Header />
      )}

      <Outlet />
    </>
  )
}
