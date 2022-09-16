import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'
import { Link as LinkBase } from 'react-router-dom'
import { Container } from './styles'

interface LinkProps {
  children: ReactNode
  to?: string
}

export function Link({ children, to = '/' }: LinkProps) {
  return (
    <Container>
      {to ? (
        <a href={to} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <LinkBase to={to}>{children}</LinkBase>
      )}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </Container>
  )
}
