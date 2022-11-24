import React, { HTMLAttributes } from 'react'

import { Container as Body, Wrapper } from './styles'

export interface Props extends HTMLAttributes<HTMLElement> {
    flex?: boolean
    column?: boolean
    wrap?: boolean
    gap?: string
    padding?: string

    children?: React.ReactNode
}

export const Container: React.FC<Props> = ({...props}) => {
    return (
        <Body {...props}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Body>
    )
}