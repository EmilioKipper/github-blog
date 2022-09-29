import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { UserContext } from '../../contexts/UserContext'
import { List, Main, Search } from './styles'

export function Home() {
  const {
    issues: { items },
  } = useContext(UserContext)

  return (
    <>
      <Header />
      <Main>
        <Search>
          <div>
            <h2>Publicações</h2>
            {items.length === 1 ? (
              <span>{items.length} publicação</span>
            ) : (
              <span>{items.length} publicações</span>
            )}
          </div>
          <Input />
        </Search>

        <List>
          {items.map((issue) => (
            <Link
              to={`/post/${issue.id}`}
              key={issue.id}
              style={{ textDecoration: 'none' }}
            >
              <Card
                body={issue.body}
                title={issue.title}
                updatedAt={issue.updated_at}
              />
            </Link>
          ))}
        </List>
      </Main>
    </>
  )
}
