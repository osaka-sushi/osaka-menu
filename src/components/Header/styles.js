import styled from 'styled-components'

export const Container = styled.div`

    margin: 0 auto;

    width: 100%;
    
    max-width: 720px;

    display: flex;
    gap: 0.5rem;

    .image{
        height: 60px;
        width: 60px;

        background: ${props => props.theme.secondaryColor};
        clip-path: circle();

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 60px;
            clip-path: circle();
        }
    }

    .text{
        display: flex;
        justify-content: center;
        flex-direction: column;

        p{
            font-weight: lighter;
        }
    }
`