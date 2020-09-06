import React from 'react';
import Wrapper from './App/Wrapper/index'
import Header from './App/Header/index'
import Banner from './App/Banner/index'
import WhoWeAre from './App/WhoWeAre/index'
import Products from './App/Products/index'
import Collections from './App/Collections/index'
import Footer from './App/Footer/index'

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <Products></Products>
      <Collections></Collections>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
