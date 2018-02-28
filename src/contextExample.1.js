export default 
`const withState = WrappedComponent => props => (
  <Consumer>
    {state => <WrappedComponent {...state} {...props} />}
  </Consumer>
);
`
