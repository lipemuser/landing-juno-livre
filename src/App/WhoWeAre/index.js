import React from 'react'

import styled from 'styled-components'
import Slide from './slide'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  align-items: center;
`;

export const H2 = styled.h2`
  color: var(--font-primary-color);
  font-weight: 300;
  font-size: 28px;
  text-align: center;

`;

export const P = styled.p`
  color: var(--font-primary-color);
  font-size: 20px;
  line-height: 33px;
  font-weight: 300;
  text-align: center;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 25px;
  @media(max-width: 880px) {
    padding: 0px 20px;
  }
`;

const WhoWeAre = () => {
  return (
    <Wrapper id="who-we-are">
      <H2>QUEM SOMOS</H2>
      <P>
      Somos uma empresa que produz chocolates prêmiados mundialmente, presando pela apresentação e criatividade na criação de sabores...
      </P>
      <Slide></Slide>
    </Wrapper>
  )
}

export default WhoWeAre
