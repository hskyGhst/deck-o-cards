import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Suit } from './Suit';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Suit',
  component: Suit,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Suit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Suit> = (args) => <Suit {...args} />;

export const Heart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heart.args = {
  type: 'heart',
};

export const Diamond = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Diamond.args = {
  type: 'diamond',
};

export const Club = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Club.args = {
  type: 'club',
};

export const Spade = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Spade.args = {
  type: 'spade',
};
