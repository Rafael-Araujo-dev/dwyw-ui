import styled from 'styled-components'

interface Props {
    mode?: string
    size?: string
    fill?: boolean
    width?: string
    styles?: {}
    outline?: boolean
}

export const Container = styled.button<Props>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 14px;
    padding: 9px 20px;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition-duration: .2s;
    transition-property: background-color, color, border;
    transition-timing-function: ease;
    border: 2px solid transparent;

    ${ props => // mode
        props.mode === 'default' && `
            color: #333333;
            background-color: #F0F0F0;
        
            &:hover {
                color: #333333;
                background-color: #A0A0A0;
            }

            ${props.outline ? `
                background-color: #FFFFFF;
                color: #333333;
                border: 2px solid #A0A0A0;

                &:hover {
                    color: #333333;
                    background-color: #A0A0A0;
                }
            ` : ``}
        ` ||
        props.mode === 'primary' && `
            color: #FFFFFF;
            background-color: #1EA7FD;

            &:hover {
                color: #FFFFFF;
                background-color: #146FA8;
            }

            ${props.outline ? `
                background-color: #FFFFFF;
                color: #1EA7FD;
                border: 2px solid #1EA7FD;

                &:hover {
                    color: #FFFFFF;
                    background-color: #1EA7FD;
                }
            ` : ``}
        ` ||
        props.mode === 'secondary' && `
            color: #FFFFFF;
            background-color: #333333;

            &:hover {
                color: #FFFFFF;
                background-color: #3C4145;
            }

            ${props.outline ? `
                background-color: #FFFFFF;
                color: #333333;
                border: 2px solid #333333;

                &:hover {
                    color: #FFFFFF;
                    background-color: #333333;
                }
            ` : ``}
        `
    }

    ${ props => // size
        props.size === 'small' && `
            font-size: 12px;
            padding: 8px 16px;
        ` ||
        props.size === 'medium' && `
            font-size: 14px;
            padding: 9px 20px;
        ` ||
        props.size === 'large' && `
            font-size: 16px;
            padding: 10px 24px;
        `
    }

    ${ props => `
        width: ${props.fill ? '100%;' : props.width};
    `}

    ${ props => props.styles }
`