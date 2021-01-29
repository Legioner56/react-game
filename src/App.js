import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout";

import BgOne from './assets/bg1.jpg';
import BgTwo from './assets/bg2.jpg';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title='Game' descr='good game' />
      <Layout id='1' desc='Описание 1' title='Название 1' urlBg={BgOne} />
      <Layout id='2' desc='Описание 2' title='Название 2' colorBg="#7be3fe" />
      <Layout id='3' desc='Описание 3' title='Название 3' urlBg={BgTwo}/>
      <Footer />
    </>
  );
}

export default App;
