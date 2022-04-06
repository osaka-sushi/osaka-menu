import styled from 'styled-components';

export const Container = styled.div`

    margin: 10px auto;

    width: 100%;
    max-width: 720px;

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

            p{
                font-weight: lighter;
                width: 80%;
            }
            
            h5{
                position: relative;
                padding-left: 5px;

                ::before{
                    content: '';
                    width: 2px;
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