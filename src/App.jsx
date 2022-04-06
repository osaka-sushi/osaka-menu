import {Layout} from './styles/appStyles'

import Header from "./components/Header";
import Categories from './components/Categories'
import Items from './components/Items'
import { useState } from 'react';
import Location from './components/Location';

function App() {

  const [currentCategory, setCurrentCategory] = useState()

  return (
    <>
      <Layout>
        <Location/>
        <Header />

        <Categories 
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        />

        <Items currentCategory={currentCategory}/>

      </Layout>
    </>
  );
}

export default App;
