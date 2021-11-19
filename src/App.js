import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const x = 1;
//x = 2;    // TypeError: Assignment to constant variable.

function sayHello(){

  console.log("Declaring vairables using var");
  for(var i=0; i<5; i++){
    console.log(i);
  }
  console.log("Ourside loop: " + i);

  console.log("Declaring vairables using let");
  for(let j=0; j<10; j+=2){
    console.log(j);
  }
  //console.log(j); // Compile error: 'j' is not defined  no-undef

  console.log("Const: " + x)


}

sayHello();

export default App;
