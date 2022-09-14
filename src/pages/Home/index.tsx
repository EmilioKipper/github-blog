import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { List, Main, Search } from './styles'

export function Home() {
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
          <Card />
        </List>
      </Main>
    </>
  )
}
