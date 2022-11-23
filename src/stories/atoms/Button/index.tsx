import React, { HTMLAttributes } from 'react';

import { Container } from './style'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**  Select the button variant */
  variant?: string
  /** Disable button background color */
  outline?: boolean
  /** Sets the font size */
  size?: string
  /** Sets the button to fill the full-width parent */
  fill?: boolean
  /** Defines the button width */
  width?: string
  /** 
   * Defines the configuration of the button from the URL of the storybook
   * 
   * Example: https://dwyw-ui.vercel.app/?path=/story/atoms-button--default&args=mode:secondary;label:Button+Text
   * */
  styleString?: string
  /** 
   * Add a custom style
   * <pre>
   * {
   *    background-color: #333333;
   *    color: #FFFFFF;
   * }
   * </pre>
   * */
  styles?: {}
  /** 
   * Adds a custom style when triggering the hover event 
   * <pre>
   * {
   *    background-color: #FFFFFF;
   *    color: #333333;
   * }
   * </pre>
   * */
  stylesOnHover?: {}
  /** Defines the button content */
  children?: React.ReactNode

  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  info?: boolean
  dark?: boolean
  link?: boolean
}

export const Button: React.FC<Props> = ({...props }) => {
  props = props.styleString ? extractStyles(props.styleString, props) : props
  
  return (
    <Container
      {...props}
      type='button'
      variant={props.variant}
      size={props.size}
      styles={{
        ...props.styles,
        "&:hover": { ...props.stylesOnHover, }
      }}
      outline={props.outline}
      fill={props.fill}
      width={props.width}
    >
      { props.children }
    </Container>
  );
};

Button.defaultProps = {
  outline: false,
  size: 'medium',
};

const extractStyles = (styleString: string, props: Props) => {

  let styles = styleString.split('/').find(el => el.includes('button'))?.split('&')
  let args: string | string[] = ''

  if (styles) {
    props.variant = styles[0].replace('atoms-button--','')
    args = styles[1] && styles[1].replace('args=','')

      if (args) {
        args = args.split(';')

        for (let i = 0; i < args.length; i++) {
          let arg: string[] = args[i].split(':')

          let boolean = undefined
          let color = undefined

          // Check if value is a boolean
          if (arg[1] === 'false') boolean = false
            else if (arg[1] === 'true') boolean = true

          // Check if value is a color property
          if (arg[1] && arg[1].includes('!hex')) { // Converts to hex string
            color = '#' + arg[1].replace(/[!hex()]/g,'')
          } else if (arg[1] && arg[1].includes('!rgb')) { // Converts to rgb string
            color = arg[1].replace('!','')
          } else if (arg[1] && arg[1].includes('!rgba')) { // Converts to rgba string
            color = arg[1].replace('!','')
          } else if (arg[1] && arg[1].includes('!hsla')) { // Converts to hsla string
            color = arg[1].replace(/[!hsla()]/g,'')
            color = color.split(',')
            color = `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, ${color[3]})`
          }

          let value: string | boolean | number | void = ''

          // Set the corresponding property value
          if (boolean !== undefined) value = boolean
          else if (color !== undefined) value = color
          else value = arg[1]

          props = {
            ...props,
            [arg[0]]: value	
          }
        }
      }
  }

  return props
}