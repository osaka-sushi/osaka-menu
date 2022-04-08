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

    div{

        display: flex;
        gap: 0.5rem;

        .image{

            background: ${props => props.theme.secondaryColor};
            clip-path: circle();
            height: 104px;
            width: 104px;

            display: flex;
            justify-content: center;
            align-items: center;

            img{
                height: 100px;
                clip-path: circle();
            }
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;

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
                font-size: 0.8rem;
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
    }
`