import styled from 'styled-components';

export const Container = styled.div`
    div{
        div{

            background: ${props => props.theme.secondaryColor};
            clip-path: circle();
            height: 65px;
            width: 65px;

            display: flex;
            justify-content: center;
            align-items: center;

            img{
                height: 60px;
                clip-path: circle();
            }
        }
    }
`