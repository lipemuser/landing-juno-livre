import React from 'react'

import styled from 'styled-components'

export const FooterElement = styled.footer`
  padding: 30px 20px;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
`;

export const H4 = styled.h4`
  color: var(--font-primary-color);
  font-weight: bold;
  font-size: 17px;
  max-width: 570px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterElement>
      <H4>© 2020 Compartes Chocolatier. Todos os direitos reservados. | Política de Acessibilidade | Termos de Serviço</H4>
    </FooterElement>
  )
}

export default Footer
