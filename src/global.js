import styled from "styled-components";

export const Layout = styled.div`

`

export const Header = styled.div`
    img{
        height: 60px;
    }
`

export const Categories = styled.div`

    .selected{
        border-bottom: 1px solid red;
    }
`

export const Items = styled.div`
    div{
        div{
            position: relative;

            img{
                height: 3.77rem;
                clip-path: circle();
            }
            span{
                height: 65px;
                width: 65px;
                background-color: red;
                position: absolute;
                top: -2px;
                left: 25px;
                border-radius: 100%;
                z-index: -1;
            }
        }
    }
`