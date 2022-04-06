import styled from 'styled-components'

export const Container = styled.div`

    margin: 10px auto;

    width: 100%;
    max-width: 720px;

    display: flex;

    gap: 0.5rem;

    overflow-x: auto;
    -ms-overflow-style: none; 
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    h1{
        cursor: pointer;

        transition: color 0.2s ease-in-out;

        font-weight: lighter;

        font-size: 1rem;

        &:hover{
            color: ${props => props.theme.secondaryColor};
            font-weight: bold;
        }
    }

    .selected{
        border-bottom: 1px solid ${props => props.theme.secondaryColor};
    }

    
`