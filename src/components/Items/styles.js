import styled from 'styled-components';

export const Container = styled.div`

    margin: 0 auto;

    width: 100%;
    max-width: 720px;
    height: 100%;

    overflow-y: auto;
    
    padding: 1rem;
    padding-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 425px) {
        -ms-overflow-style: none; 
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

`

export const ItemCard = styled.div`
    display: flex;
    gap: 0.5rem;

    .image{

        background: ${props => props.theme.secondaryColor};
        clip-path: circle();
        height: 96px;
        width: 96px;

        display: flex;
        justify-content: center;
        align-items: center;

        img{
            height: ${props => props.image ? '93px' : '99px'};
            clip-path: circle();
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;

        h4{
            font-size: 1rem;
            position: relative;

            &::after{
                content: '';
                width: 100%;
                height: 1px;

                position: absolute;
                left: 0;
                bottom: -2px;

                background: ${props => props.theme.secondaryColor};
            }
        }

        p{
            font-weight: lighter;
            width: 100%;
            max-width: 500px;
            font-size: 0.9rem;
        }
        
        h5{
            position: relative;
            padding-left: 5px;

            font-size: 1rem;

            ::before{
                content: '';
                width: 1px;
                height: 100%;
                background: #fff;

                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }

`