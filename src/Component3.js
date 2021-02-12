import React from 'react';
import PropTypes from 'prop-types';

class Component3 extends React.Component {
    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <h1>{this.props.prop1}</h1>
                <h1>{this.props.prop2.key1}</h1>
                <h1>{this.props.prop2.key2}</h1>
            </div>
        )
    }
}

Component3.defaultProps = {
    prop1: 'VALUE1',
    prop2: { key1: 'VALUE1', key2: 'VALUE2' },
}

export default Component3;
