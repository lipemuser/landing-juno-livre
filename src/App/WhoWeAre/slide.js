import React from 'react'

import styled from 'styled-components'
import { Carousel } from 'element-react';

import 'element-theme-default';

import Slide1 from '../../assets/images/slide-1.png'
import Slide2 from '../../assets/images/slide-2.png'
import Slide3 from '../../assets/images/slide-3.png'

export const Image = styled.img`
  height: 24vw;
  @media(max-width: 880px) {
    height: 42vw;
  }
`;

export const Wrapper = styled.div`
  width: 60%;
  @media(max-width: 880px) {
    width: 100%;
  }
  margin-top: 35px;
  text-align: center;
  > .el-carousel {
    > .el-carousel__container {
      height: 25vw;
      @media(max-width: 880px) {
        height: 45vw;
      }
    }
  }
`;

const slide = () => {

  return (
    <Wrapper>
      <Carousel arrow="never" indicatorPosition="none" interval="4000" type="card">
        {
          [Slide1, Slide2, Slide3].map((src, index) => {
            return (
              <Carousel.Item key={index}>
                <Image src={src} alt="slides" />              
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </Wrapper>
  )
}

export default slide
