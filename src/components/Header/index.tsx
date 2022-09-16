import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import cover from '../../assets/cover.svg'
import { UserContext } from '../../contexts/UserContext'
import { Link } from '../Link'
import { Container, Card, Title, About, Footer } from './styles'

export function Header() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <img src={cover} alt="" />

      <Card>
        <img src={user.avatar_url} alt="Foto de Emílio" />

        <div>
          <div>
            <Title>{user.name}</Title>
            <Link to={user.html_url}>GITHUB</Link>
          </div>

          <About>{user.bio}</About>

          <Footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} Seguidores
            </span>
          </Footer>
        </div>
      </Card>
    </Container>
  )
}
