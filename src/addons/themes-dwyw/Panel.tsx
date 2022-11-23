import React from "react";
import { AddonPanel } from "@storybook/components";
import { Editor } from "./components/Editor";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {

  return (
    <AddonPanel {...props}>
      <Editor />
    </AddonPanel>
  );
};
