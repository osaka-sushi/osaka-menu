import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    background: ${props => props.theme.primaryColor};
    
    gap: 0.5rem;

    transition: visibility 0s, opacity 0.2s ease-in;

    visibility: ${props => props.isMenuOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.isMenuOpen ? 1 : 0};

    span{
        position: absolute;
        right: 10px;
        top: 10px;

        font-size: 2rem;

        svg{
            fill: ${props => props.theme.secondaryColor};;
        }
    }

    div{

        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        justify-content: flex-start;

        width: 100%;
        max-width: 450px;
        
        h6{
            font-size: 1.2rem;
            color: ${props => props.theme.secondaryColor};
        }

        button{
            background: ${props => props.theme.secondaryColor};
            padding: 0.5rem;
            border: 0;
            border-radius: 0.2rem;
            font-weight: bold;
        }
    }
`;
