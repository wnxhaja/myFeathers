import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Text2 = () => <div><h1>wasak</h1></div>;

class Text extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
  <Router history={browserHistory} >
    <Route path="/" component={Text}>
      <IndexRoute component={Text2} />
    </Route>
  </Router>
);

export default routes;
