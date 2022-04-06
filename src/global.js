import styled from "styled-components";

export const Layout = styled.div`

`

export const Categories = styled.div`

    .selected{
        border-bottom: 1px solid red;
    }
`

export const Items = styled.div`
    div{
        div{

            background: red;
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