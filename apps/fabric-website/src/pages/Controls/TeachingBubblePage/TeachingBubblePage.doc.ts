import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { TeachingBubblePageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/TeachingBubble/TeachingBubble.doc';
import { ISideRailLink } from '@uifabric/example-app-base/lib/index2';

const related: ISideRailLink[] = [];
// const componentUrl =
//   'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/TeachingBubblePage';

export const TeachingBubblePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
