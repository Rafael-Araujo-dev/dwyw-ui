import styled from 'styled-components'

interface Props {
    flex?: boolean
    column?: boolean
    wrap?: boolean
    gap?: string
    padding?: string
}

export const Wrapper = styled.div`
    max-width: 1240px;
    width: 100%;
`

export const Container = styled.section<Props>`
    display: relative;
    margin: 0;
    padding: 0px 5%;
    max-width: 100%;

    ${ props => props.padding && `padding: ${props.padding};` }

    ${Wrapper} {
        ${ props => props.flex && 'display: flex;' }
        ${ props => props.wrap && 'flex-wrap: wrap;' }
        ${ props => props.column && `flex-direction: column;` }
        ${ props => props.gap && `gap: ${props.gap};` }
    }
`