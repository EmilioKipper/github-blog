import { Container } from './styles'

export function Card() {
  return (
    <Container>
      <div>
        <h3>JavaScript data types and data structures</h3>
        <time>Há 1 dia</time>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = &#39;bar&#39; ; // foo is now
        a string foo = true; // foo is now a boolean
      </p>
    </Container>
  )
}
