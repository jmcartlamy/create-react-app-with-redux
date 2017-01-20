import React, {Component} from 'react';

import ExampleComponent from '../components/ExampleComponent.js'
import logo from '../../assets/logo.svg';

/*
  Example with reducer / action :

  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import * as exampleActions from '../actions/exampleActions.js';
 */

class App extends Component {

  render() {

    /*
      Check your props :
      this.props.actions.userInput(value);
     */

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <ExampleComponent />
      </div>
    );

  }
}


/*
  Connect your reducer and add state & dispatch in your props :

  const mapStateToProps = (state) => {
    return {
      userInput: state.userInputReducer
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(exampleActions, dispatch)
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
*/

export default App;
