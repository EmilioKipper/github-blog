import styled from 'styled-components'

export const ArticleContainer = styled.main`
  max-width: 864px;
  margin: auto;
  padding: 40px 32px;

  font-family: 'Nunito';
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme.text};
`
