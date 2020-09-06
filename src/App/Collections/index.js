import React from 'react'

import styled from 'styled-components'

import CacauImg from '../../assets/images/cacau.png'

import Collection1 from '../../assets/images/collection-1.png'
import Collection2 from '../../assets/images/collection-2.png'
import Collection3 from '../../assets/images/collection-3.png'
import Collection4 from '../../assets/images/collection-4.png'

import Item from '../../shared/item'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const WrapperCollections = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1380px;
  margin-top: 30px;
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

const Collections = () => {

  const collections = [
    {
      name: 'Cookies & Cream Chocolate Bar',
      src: Collection1,
      price: 'R$ 50,00',
      stars: 5,
      secundary: false,
    },
    {
      name: 'Raspberry Rose Dark Chocolate Bar',
      src: Collection2,
      price: 'R$ 50,00',
      stars: 3,
      secundary: false,
    },
    {
      name: 'Peanut Butter & Jelly Milk Chocolate Bar',
      src: Collection3,
      price: 'R$ 50,00',
      stars: 5,
      secundary: false,
    },
    {
      name: 'Fruit Cocktail Dark Chocolate Bar',
      src: Collection4,
      price: 'R$ 50,00',
      stars: 4,
      secundary: false,
    },
  ];

  return (
    <Wrapper id="collections">
      <WrapperCollections>
        <H2>Coleções</H2>
        <ItemList>
          {
            collections.map((item, key) => {
              return (<Item data={item} key={key}></Item>);
            })
          }
        </ItemList>
      </WrapperCollections>
    </Wrapper>
  )
}

export default Collections
