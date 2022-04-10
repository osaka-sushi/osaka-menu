import styled from 'styled-components'
import { css } from 'styled-components'

export const LoadingContainer = styled.div`
    position: ${props => props.position};

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const spinnerOverride = css`
    border-color: #FF003D;
`