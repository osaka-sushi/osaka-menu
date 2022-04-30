import styled from 'styled-components'

export const Container = styled.div`

    margin: 0 auto;

    width: 100%;
    
    max-width: 720px;

    padding: 0rem 1rem;

    display: flex;
    gap: 0.5rem;

    justify-content: space-between;

    .icon{
        font-size: 1.8rem;
        height: 100%;
        display: flex;
        align-items: center;

        color: ${props => props.theme.secondaryColor};
    }

    .info{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.5rem;

        p{
            font-weight: lighter;
        }
        
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
    }
`