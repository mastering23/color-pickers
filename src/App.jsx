import {ColorBtn, RandomColor, RandomObjects}  from './BtnColor';
import './App.css';

const App = () => {

  return (
    <>
      <h1 id="heading">TESTING RANDOM COLORS | <h2 id="heading2"></h2></h1>
      <hr />

      <ColorBtn onClickHandler={RandomColor} buttonText="Change TEXT COLOR" />
     
      <ColorBtn onClickHandler={RandomObjects} buttonText="Change COLOR CICLE" />

    </>
  );
};

export default App;
