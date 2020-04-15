import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import {muiTheme} from 'storybook-addon-material-ui';

setConsoleOptions({
    panelExclude: [],
});

addDecorator(withA11y);
addDecorator(muiTheme());
addDecorator((storyFn, context) => withConsole()(storyFn)(context));