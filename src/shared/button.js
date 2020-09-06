import React from 'react';

import styled from 'styled-components'

const DefaultButton = styled.button`
  background: ${props => !props.secundary ? "var(--primary-color)" : "var(--secundary-color)" };
  color: var(--font-primary-color);
  width: ${props => props.width100 ? "100%" : "130px" };
  height: 40px;
  border: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  -webkit-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  &:hover {
    background: ${props => !props.secundary ? "var(--primary-color-hover)" : "var(--secundary-color-hover)" };
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(200 194 189 / 22%), 0 0 0 3px rgb(200 194 189 / 29%);
  }
`;

const Button = ({children, secundary, width100}) => {

  return (
    <DefaultButton secundary={secundary} width100={width100} className="className">
      {children}
    </DefaultButton>
  )

}

export default Button