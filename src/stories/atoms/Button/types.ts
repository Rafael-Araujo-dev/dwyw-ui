export const argTypes = {
    variant: {
      type: 'string',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
      control: 'select',
    },
    fill: {
      control: 'boolean',
      defaultValue: false,
    },
    outline: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
      defaultValue: 'medium',
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
    width: { control: 'text', },
    styleString: { control: 'text', },
    styles: { control: 'object', },
    stylesOnHover: { control: 'object', },
    onClick: { action: 'clicked', },
    primary: { control: false, },
    secondary: { control: false, },
    success: { control: false, },
    warning: { control: false, },
    danger: { control: false, },
    info: { control: false, },
    dark: { control: false, },
    link: { control: false, },
}