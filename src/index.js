import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { RestaurantContextProvider } from './context/Restaurant';
import GlobalStyle from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme'
import copyCollectionItems from './util/copyCollectionItems'

//copyCollectionItems('osaka-jales-categories', 'osaka-stafe-categories')

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <RestaurantContextProvider>
        <App />
      </RestaurantContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

