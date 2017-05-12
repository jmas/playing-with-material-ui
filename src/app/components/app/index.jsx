import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import lazify from 'components/layzify/index.jsx';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const loadComponent = (name) => lazify(() => System.import(`pages/${name}.jsx`));

export default () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Route exact path="/" component={ loadComponent('Home') }/>
                <Route path="/settings" component={ loadComponent('Settings') }/>
            </div>
        </Router>
    </MuiThemeProvider>
);
