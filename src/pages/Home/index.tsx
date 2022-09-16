import { useContext } from 'react'
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
            <span>6 publicações</span>
          </div>
          <Input />
        </Search>

        <List>
          {items.map((issue) => (
            <Card
              key={issue.id}
              body={issue.body}
              title={issue.title}
              updatedAt={issue.updated_at}
            />
          ))}
        </List>
      </Main>
    </>
  )
}
