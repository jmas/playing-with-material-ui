import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default load => {
    return class LazyComponent extends Component {
        constructor () {
            super();
            this.state = { Component: null };
        }

        componentDidMount () {
            load().then(namespace => this.setState({ Component: namespace.default }));
        }

        render () {
            const { props } = this;
            const { Component } = this.state;
            return Component? <Component {...props}/>: <CircularProgress />;
        }
    }
};
