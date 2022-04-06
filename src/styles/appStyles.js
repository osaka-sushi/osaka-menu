import styled from 'styled-components'

export const Layout = styled.div`
    height: 100vh;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor}

`