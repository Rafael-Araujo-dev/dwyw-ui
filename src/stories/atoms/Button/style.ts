import styled from 'styled-components'

interface Props {
    variant?: string
    size?: string
    fill?: boolean
    width?: string
    styles?: {}
    outline?: boolean
    primary?: boolean
    secondary?: boolean
    success?: boolean
    danger?: boolean
    warning?: boolean
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

    ${ props => // variant
        (!props.primary && !props.secondary && !props.success && !props.danger && !props.warning) &&
        (props.variant === 'default' || props.variant === undefined) && `
            color: #333333;
            background-color: #F0F0F0;
        
            &:hover {
                color: #333333;
                background-color: #A0A0A0;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #333333;
                border: 2px solid #A0A0A0;

                &:hover {
                    color: #333333;
                    background-color: #A0A0A0;
                }
            ` : ``}
        ` ||
        (props.variant === 'primary' || props.primary ) && `
            color: #FFFFFF;
            background-color: #1EA7FD;

            &:hover {
                color: #FFFFFF;
                background-color: #146FA8;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #1EA7FD;
                border: 2px solid #1EA7FD;

                &:hover {
                    color: #FFFFFF;
                    background-color: #1EA7FD;
                }
            ` : ``}
        ` ||
        (props.variant === 'secondary' || props.secondary ) && `
            color: #FFFFFF;
            background-color: #333333;

            &:hover {
                color: #FFFFFF;
                background-color: #3C4145;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #333333;
                border: 2px solid #333333;

                &:hover {
                    color: #FFFFFF;
                    background-color: #333333;
                }
            ` : ``}
        ` ||
        (props.variant === 'success' || props.success ) && `
            color: #FFFFFF;
            background-color: #1F8035;

            &:hover {
                color: #FFFFFF;
                background-color: #145523;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #1F8035;
                border: 2px solid #1F8035;

                &:hover {
                    color: #FFFFFF;
                    background-color: #1F8035;
                }
            ` : ``}
        ` ||
        (props.variant === 'danger' || props.danger ) && `
            color: #FFFFFF;
            background-color: #C32232;

            &:hover {
                color: #FFFFFF;
                background-color: #821621;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #C32232;
                border: 2px solid #C32232;

                &:hover {
                    color: #FFFFFF;
                    background-color: #C32232;
                }
            ` : ``}
        ` ||
        (props.variant === 'warning' || props.warning ) && `
            color: #000000;
            background-color: #FFC107;

            &:hover {
                color: #000000;
                background-color: #AA8004;
            }

            ${props.outline ? `
                background-color: transparent;
                color: #FFC107;
                border: 2px solid #FFC107;

                &:hover {
                    color: #000000;
                    background-color: #FFC107;
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