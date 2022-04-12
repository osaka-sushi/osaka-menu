import styled from 'styled-components'

export const Layout = styled.div`
    height: ${() => window.innerHeight}px;
    padding-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor}

`