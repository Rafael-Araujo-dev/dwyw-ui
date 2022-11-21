import React from 'react';

import { Story } from '@storybook/react'

import { Header, Props } from './index';

export default {
  title: 'Molecules/Header',
  component: Header,
};

const Template: Story<Props> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
