import styled from 'styled-components'

export const Container = styled.div`
  max-width: 416px;
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  padding: 32px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme.title};
  }

  time {
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme.span};
    white-space: nowrap;
  }

  p {
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme.text};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 20px;
  }
`
