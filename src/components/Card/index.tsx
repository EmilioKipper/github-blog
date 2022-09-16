import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Container } from './styles'

interface CardProps {
  title: string
  updatedAt: string
  body: string
}

export function Card({ title, body, updatedAt }: CardProps) {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <time dateTime={updatedAt}>
          {formatDistanceToNow(new Date(updatedAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </div>
      <p>{body}</p>
    </Container>
  )
}
