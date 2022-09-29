import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import cover from '../../assets/cover.svg'
import { UserContext } from '../../contexts/UserContext'
import { Link } from '../Link'
import { Container, Card, Title, About, Footer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface HeaderProps {
  post?: {
    title: string
    comments: number
    publishedDate: string
    owner: string
    link: string
  }
}

export function Header(props: HeaderProps) {
  const { user } = useContext(UserContext)
  const isHomePage = props.post

  return (
    <Container>
      <img src={cover} alt="" />

      {!isHomePage ? (
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
      ) : (
        <Card>
          <div>
            <div>
              <Link>Voltar</Link>
              <Link to={props.post?.link}>GITHUB</Link>
            </div>

            <div>
              <Title>{props.post?.title}</Title>
            </div>

            <Footer>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {props.post?.owner}
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarDay} />
                {props.post &&
                  formatDistanceToNow(new Date(props.post?.publishedDate), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
                {props.post?.comments} comentários
              </span>
            </Footer>
          </div>
        </Card>
      )}
    </Container>
  )
}
