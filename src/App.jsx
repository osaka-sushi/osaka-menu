import {Layout} from './styles/appStyles'

import Header from "./components/Header";
import Categories from './components/Categories'
import Items from './components/Items'
import { useState } from 'react';

function App() {

  const [currentCategory, setCurrentCategory] = useState()

  return (
    <>
      <Layout>

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
