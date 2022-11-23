import React from 'react';
import { addons, types } from "@storybook/addons";
import { Panel } from "../Panel";

// Register the addon
addons.register('theme-dwyw', () => {
  addons.add('theme-dwyw', {
    type: types.PANEL,
    title: "Theme DWYW",
    match: ({ viewMode }) => viewMode === "story",
    render: ({active}) => <Panel active={active ? active : false} />,
  });
});