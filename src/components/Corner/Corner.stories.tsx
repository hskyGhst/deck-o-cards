import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Corner } from './Corner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Corner',
  component: Corner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Corner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Corner> = (args) => <Corner {...args} />;

export const Ace = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ace.args = {
  rank: 'A',
  suit: 'heart',
};
