import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { RestaurantContextProvider } from './context/Restaurant';
import { Menu } from './pages/Menu';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme'
import 'swiper/css';

//import copyCollectionItems from './util/copyCollectionItems'
//copyCollectionItems('osaka-jales-categories', 'osaka-stafe-categories')


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ChakraProvider resetCSS theme={theme}>
      <RestaurantContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="menu/:location" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </RestaurantContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

