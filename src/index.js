import React from 'react';
import ReactDOM from 'react-dom';

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

/*ReactDOM.render(<Component1 />, document.getElementById('root'));*/

/*ReactDOM.render(<Component2 children={ <div>CHILD ELEMENT</div> } />, document.getElementById('root'));*/

/*ReactDOM.render(<Component3 prop1='XXX' />, document.getElementById('root'));*/

ReactDOM.render(<Component4 prop1='XXX' />, document.getElementById('root'));
