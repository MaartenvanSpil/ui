import React from 'react';
import { storiesOf } from '@storybook/react';

import Tippy from '@tippy.js/react';
import tooltipStyle from './Tooltip';

storiesOf('Components|Tooltip', module).add('default', () => (
  <Tippy
    // options
    content="Welcome to the tooltip"
    trigger="click"
    {...tooltipStyle}>
    <span>Click here to show tooltip</span>
  </Tippy>
));
