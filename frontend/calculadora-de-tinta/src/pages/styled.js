import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 65px;
  }

  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`
