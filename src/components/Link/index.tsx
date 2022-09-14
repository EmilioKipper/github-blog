import { ReactNode } from 'react'
import { Link as LinkBase } from 'react-router-dom'
import { Container } from './styles'

interface LinkProps {
  children: ReactNode
}

export function Link({ children }: LinkProps) {
  return (
    <Container>
      <LinkBase to="/">{children}</LinkBase>
    </Container>
  )
}
