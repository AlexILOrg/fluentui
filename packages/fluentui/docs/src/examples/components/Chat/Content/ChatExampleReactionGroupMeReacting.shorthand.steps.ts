import { ALL_THEMES, ScreenerTestsConfig } from '@fluentui/scripts/screener';
import { reactionClassName, chatMessageContentClassName } from '@fluentui/react-northstar';

const selectors = {
  chatMessageContent: chatMessageContentClassName,
  reaction: `.${reactionClassName}`,
};

const config: ScreenerTestsConfig = {
  themes: ALL_THEMES,
  steps: [
    builder => builder.click(selectors.reaction).snapshot('Clicks the first reaction'),
    (builder, keys) => builder.keys(selectors.reaction, keys.tab).snapshot('Set focus on the second reaction'),
  ],
};

export default config;
