import React from 'react';
import { render } from 'react-dom';
import App from 'components/app/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
render(React.createElement(App), document.getElementById('root'));
