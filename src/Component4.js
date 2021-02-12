import React from 'react';
import PropTypes from 'prop-types';

const Component4 = props => (
    <div>
        <h1>PROP: {props.prop1}</h1>
    </div>
);

Component4.propTypes = {
    prop1: PropTypes.string.isRequired
}

export default Component4;
