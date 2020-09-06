import React from 'react'
import PropTypes from "prop-types"

import styled from 'styled-components'

import Background from '../../assets/images/banner-principal.png';
import Button from '../../shared/button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--max-width);
  @media(max-width: 1380px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 18px;
  }
`;

export const H1 = styled.h1`
  color: var(--font-primary-color);
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 48px;
  width: 42%;
  margin-bottom: 25px; 
  @media(max-width: 880px) {
    font-size: 40px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    width: 50%;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  @media(max-width: 880px) {
    background-position: 30%;
  }
  @media(max-width: 726px) {
    background-position: 40%;
  }
  @media(max-width: 580px) {
    background-position: 40%;
  }
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 582px;
  width: 100%;
  display: flex;
  justifyContent: center;
`;

const BackgroundSection = ({ className, height, backPosition }) => {
      
    return (
        <BackgroundImage>

          <Wrapper className="wrapper-limit">
            <H1>Comer chocolate é uma arte que levamos a sério</H1>
            <Button secundary >
              Comprar
            </Button>
          </Wrapper>

        </BackgroundImage>
      )
    }


BackgroundSection.defaultProps = {
  height: `535px`,
}

BackgroundSection.propTypes = {
  height: PropTypes.string.isRequired,
}

export default BackgroundSection