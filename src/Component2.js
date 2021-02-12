import React from 'react';
import PropTypes from 'prop-types';

class Component2 extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}

Component2.propTypes = {
    children: PropTypes.element.isRequired
};

export default Component2;
