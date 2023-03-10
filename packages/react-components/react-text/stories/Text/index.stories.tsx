import { Meta } from '@storybook/react';
import { Text } from '@fluentui/react-components';
import textDescriptionMd from './TextDescription.md';
import textBestPracticesMd from './TextBestPractices.md';

export { Default } from './Default.stories';
export { Font } from './TextFont.stories';
export { Size } from './TextSize.stories';
export { Weight } from './TextWeight.stories';
export { Italic } from './TextItalic.stories';
export { Underline } from './TextUnderline.stories';
export { StrikeThrough } from './TextStrikeThrough.stories';
export { Truncate } from './TextTruncate.stories';
export { Alignment } from './TextAlignment.stories';
export { Presets } from './TextPresets.stories';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: [textDescriptionMd, textBestPracticesMd].join('\n'),
      },
    },
  },
} as Meta;
