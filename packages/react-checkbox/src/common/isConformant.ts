import { isConformant as baseIsConformant, IsConformantOptions, TestObject } from '@fluentui/react-conformance';
import griffelTests from '@fluentui/react-conformance-griffel';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: module!.parent!.filename.replace('.test', ''),
    extraTests: griffelTests as TestObject<TProps>,
    skipAsPropTests: true,
  };

  baseIsConformant(defaultOptions, testInfo);
}