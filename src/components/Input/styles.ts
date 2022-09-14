import styled from 'styled-components'

export const InputText = styled.input`
  padding: 12px 16px;
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  display: block;
  width: 100%;
`
