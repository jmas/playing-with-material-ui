import React from 'react';
import {
    Link
} from 'react-router-dom';

export default (props) => {
    console.log(props);

    return <div>
        Settings
        <Link to="/">Home</Link>
    </div>;
};
