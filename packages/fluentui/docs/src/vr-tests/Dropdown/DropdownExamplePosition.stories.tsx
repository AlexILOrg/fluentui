import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Dropdown, dropdownSlotClassNames } from '@fluentui/react-northstar';
import DropdownExamplePosition from '../../examples/components/Dropdown/Variations/DropdownExampleOffset.shorthand';

const selectors = {
  trigger: `.${dropdownSlotClassNames.triggerButton}`,
};

export default {
  component: Dropdown,
  title: 'Dropdown',
  decorators: [
    story => (
      <StoryWright steps={new Steps().click(selectors.trigger).snapshot('Opens a dropdown').end()}>
        {story()}
      </StoryWright>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

export { DropdownExamplePosition };
