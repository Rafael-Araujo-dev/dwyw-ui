import React from 'react';

import { Story } from '@storybook/react'

import { Button, Props } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
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
}

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  outline: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'primary',
  outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
  outline: false,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'large',
  outline: false,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'small',
  outline: false,
};
