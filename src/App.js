import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr><br></br>
      <div className="container">
      <div className="box1"><h1>Box1</h1></div>
      <div className="box2"><h1>Box2</h1></div>
      </div>
      <hr></hr><br></br>
      <Footer/>
       </div>
  );
}

export default App;
