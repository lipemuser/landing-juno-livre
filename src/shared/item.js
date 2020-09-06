import React from 'react'

import styled from 'styled-components'

import { Rate } from 'element-react';
import Button from './button'

export const Wrapper = styled.div`
  display: flex;
  width: 255px;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;
  margin-top: 30px;
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: var(--font-primary-color);
  text-align: center;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 255px;
`;

export const WrapperPriceRate = styled.div`
  margin-top: 7px;
  width: 255px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2px;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 23px;
  color: var(--font-primary-color);
  margin-bottom: -7px;
`;

const Item = ({data}) => {
  return (
    <Wrapper>
      <H3>{data.name}</H3>
      <Image src={data.src} alt="imagem do item"/>
      <WrapperPriceRate>
        <Price>{data.price}</Price>
        <Rate value={data.stars} />
      </WrapperPriceRate>
      <Button secundary={data.secundary} width100 >Comprar</Button>
    </Wrapper>
  )
}

export default Item
