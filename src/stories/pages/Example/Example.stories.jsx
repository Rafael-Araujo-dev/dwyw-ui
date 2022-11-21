import React from 'react';

import { Example } from './index';
import * as HeaderStories from '../../molecules/Header/Header.stories';

export default {
  title: 'Pages/Example',
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
