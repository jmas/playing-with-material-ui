import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
    Link
} from 'react-router-dom';

export default () => (
    <div>
        <div>
            <FlatButton label="Default" />
            <FlatButton label="Primary" primary={true} />
            <FlatButton label="Secondary" secondary={true} />
            <FlatButton label="Disabled" disabled={true} />
            <br />
            <br />
            <FlatButton label="Full width" fullWidth={true} />
        </div>
        <Link to="/settings">Settings</Link>
    </div>
);
