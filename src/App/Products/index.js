import React from 'react'

import styled from 'styled-components'

import CacauImg from '../../assets/images/cacau.png'

import Product1 from '../../assets/images/product-1.png'
import Product2 from '../../assets/images/product-2.png'
import Product3 from '../../assets/images/product-3.png'
import Product4 from '../../assets/images/product-4.png'

import Item from '../../shared/item'

export const Wrapper = styled.div`
  background: var(--primary-color);
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

export const Cacau = styled.img`
  position: absolute;
  margin: 0 auto;
  margin-top: -52px;
  width: 115px;
`;

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1380px;
  margin-top: 55px;
  align-items: center;
`;

export const H2 = styled.h2`
  color: var(--font-primary-color);
  font-weight: normal;
  font-size: 30px
`;

export const ItemList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = () => {

  const products = [
    {
      name: 'Cookies & Cream Chocolate Bar',
      src: Product1,
      price: 'R$ 30,00',
      stars: 5,
      secundary: true,
    },
    {
      name: 'Raspberry Rose Dark Chocolate Bar',
      src: Product2,
      price: 'R$ 30,00',
      stars: 5,
      secundary: true,
    },
    {
      name: 'Peanut Butter & Jelly Milk Chocolate Bar',
      src: Product3,
      price: 'R$ 30,00',
      stars: 5,
      secundary: true,
    },
    {
      name: 'Fruit Cocktail Dark Chocolate Bar',
      src: Product4,
      price: 'R$ 30,00',
      stars: 5,
      secundary: true,
    },
  ];

  return (
    <Wrapper id="products">
      <Cacau src={CacauImg} alt="foto de um cacau"></Cacau>
      <WrapperProducts>
        <H2>Produtos</H2>
        <ItemList>
          {
            products.map((item, key) => {
              return (<Item data={item} key={key}></Item>);
            })
          }
        </ItemList>
      </WrapperProducts>
    </Wrapper>
  )
}

export default Products
