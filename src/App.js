import React, {Component} from 'react';
import './App.css';
import Components from './Components'
// import Tweet from './Tweet/Tweet';
// import Cars from './Tweet/Propss/Cars'
import FunctionClick from './Event Handling/FunctionClick';
// import ClassClick from './Event Handling/ClassClick';



class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <ClassClick/>  */}
      <Components/>
     
      {/* <Tweet/> */}
      {/* <Cars/> */}
      {/* <FunctionClick/>  */}
     
    </div>
  );
 }
}

export default App;
