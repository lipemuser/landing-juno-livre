import React from 'react'
import styled from 'styled-components'
import { ResetStyle } from '../../theme/compartes'

export const Main = styled.main`
  font-family: 'Shree Devanagari 714';
`;

const Wrapper = ({children}) => {
  return (
    <Main>
      <ResetStyle></ResetStyle>
      { children }
    </Main>
  )
}

export default Wrapper
