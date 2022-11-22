import React from 'react';

import { Story } from '@storybook/react'

import { Button, Props } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    mode: {
      type: 'string',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'],
      control: { type: 'select' },
      defaultValue: 'default',
    },
    outline: { control: 'boolean' },
    color: { control: 'color' },
    colorHover: { control: 'color' },
    backgroundColor: { control: 'color' },
    backgroundColorHover: { control: 'color' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium',
    },
    label: { 
      type: { name: 'string', required: true },
      control: 'text'
    },
  }
}

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: 'default',
  label: 'Button',
  outline: false,
};

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  label: 'Button',
  outline: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  label: 'Button',
  outline: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  outline: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  outline: false,
};
