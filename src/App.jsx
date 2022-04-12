import {Layout} from './styles/appStyles'

import Header from "./components/Header";
import Categories from './components/Categories'
import Items from './components/Items'
import { useState } from 'react';
import Location from './components/Location';
import { useLocation } from './context/Location';

function App() {

  const {currentLocation} = useLocation()

  const [currentCategory, setCurrentCategory] = useState()

  return (
    <>
      <Layout innetHeight={window.innerHeight}>
        <Location/>
        
        {
          currentLocation &&
          <>
            <Header />

            <Categories 
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            />

            <Items currentCategory={currentCategory}/>
          </>
        }

      </Layout>
    </>
  );
}

export default App;
