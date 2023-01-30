import { FluentDesignSystem } from '../../fluent-design-system.js';
import { Accordion } from './accordion.js';
import { styles } from './accordion.styles.js';
import { template } from './accordion.template.js';

export const definition = Accordion.compose({
  name: `${FluentDesignSystem.prefix}-accordion`,
  template,
  styles,
});