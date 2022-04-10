import styled from 'styled-components'

export const Container = styled.div`

    margin-top: 2rem;

    width: 100%;
    max-width: 720px;
    height: 130px;

    display: flex;

    gap: 0.5rem;

    padding: 0 1rem;

    align-items: center;

    overflow-x: scroll;


    @media (max-width: 425px) {
        -ms-overflow-style: none; 
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    h1{
        min-width: 120px;
        
        cursor: pointer;

        transition: color 0.2s ease-in-out;

        font-weight: lighter;

        font-size: 1rem;

        text-align: center;

        &:hover{
            color: ${props => props.theme.secondaryColor};
        }

        padding-bottom: 8px;
    }

    .selected{
        position: relative;

        ::after{
            content: '';
            background: ${props => props.theme.secondaryColor};

            width: 100%;
            height: 1px;

            position: absolute;
            left: 0;
            bottom: 0;

        }
    }

    
`