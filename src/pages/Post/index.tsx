import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { UserContext } from '../../contexts/UserContext'
import { ArticleContainer } from './styles'

export function Post() {
  const params = useParams()
  const {
    issues: { items },
  } = useContext(UserContext)

  const currentPost = items.find((issue) => issue.id === Number(params.id))

  if (!currentPost) return <></>

  return (
    <ArticleContainer>
      <ReactMarkdown>{currentPost.body}</ReactMarkdown>
    </ArticleContainer>
  )
}
