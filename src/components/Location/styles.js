import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    background: ${props => props.theme.secondaryColor};

    z-index: 10;

    position: absolute;
    top: 0;
    left: 0;

    >span{
        height: 1px;
        width: 70%;
        background: ${props => props.theme.primaryColor};
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 0.3rem;

        cursor: pointer;

        h2{
            span{
                display: block;
                text-align: center;
                color: ${props => props.theme.primaryColor};
                font-weight: bold;
            }
        }

        p{
            font-size: 0.8rem;
        }
    }
`