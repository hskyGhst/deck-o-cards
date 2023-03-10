import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rank } from './Rank';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Rank',
  component: Rank,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Rank>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rank> = (args) => <Rank {...args} />;

export const Ace = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ace.args = {
  rank: 'A',
  color: 'red',
};
