import Button from "./button.js";

export default {
  title: "Basics/Interface Elements/Buttons",
  component: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  isDisabled: false,
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  isDisabled: true,
};
