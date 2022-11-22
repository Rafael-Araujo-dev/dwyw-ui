import React from 'react';

import { Container } from './style'

export interface Props extends React.ComponentPropsWithRef<'button'> {
  mode?: string
  outline?: boolean
  color?: string
  colorHover?: string
  backgroundColor?: string
  backgroundColorHover?: string
  size?: string
  label?: string
  fill?: boolean
  width?: string

  styleString?: string
  styles?: {}
  children?: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<Props> = ({...props }) => {
  
  props = props.styleString ? extractStyles(props.styleString, props) : props

  return (
    <Container
      type='button'
      mode={props.mode}
      size={props.size}
      styles={{
        color: props.color,
        backgroundColor: props.backgroundColor,
        "&:hover": {
          color: props.colorHover,
          backgroundColor: props.backgroundColorHover,
        },
        ...props.styles
      }}
      outline={props.outline}
      onClick={props.onClick}
      fill={props.fill}
      width={props.width}
    >
      { props.label ? props.label : props.children }
    </Container>
  );
};

Button.defaultProps = {
  mode: 'default',
  outline: false,
  size: 'medium',
};

const extractStyles = (styleString: string, props: Props) => {

  let styles = styleString.split('/').find(el => el.includes('button'))?.split('&')
  let args: string | string[] = ''

  if (styles) {
    props.mode = styles[0].replace('atoms-button--','')
    args = styles[1] && styles[1].replace('args=','')

      if (args) {
        args = args.split(';')

        for (let i = 0; i < args.length; i++) {
          let arg: string[] = args[i].split(':')
          let boolean = undefined
          
          if (arg[1] === 'false') boolean = false
            else if (arg[1] === 'true') boolean = true

          props = {
            ...props,
            [arg[0]]: boolean !== undefined ? boolean : arg[1]	
          }
        }
      }
  }

  return props
}