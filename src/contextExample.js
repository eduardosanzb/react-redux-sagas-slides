export default 
`import React from 'react';
import { render } from 'react-dom';

const { Consumer, Provider } = React.createContext();

render(
  <Provider value="Hello, world!">
    <div>
      <Consumer>{value => <p>{value}</p>}</Consumer>
    </div>
  </Provider>,
  document.getElementById('root'),
);
`
