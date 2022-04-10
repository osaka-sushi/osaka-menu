import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Poppins', serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    h1, h2, h3, h4, h5, h6{
        font-size: 1.2rem;
        font-weight: normal;
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #FF003D;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #990024;
    }

`

export default GlobalStyle;