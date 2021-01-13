import './App.css';
import Header from './components/MainPage/Header';
import Intro from './components/MainPage/Intro';
import Outro from './components/MainPage/Outro';
import Footer from './components/MainPage/Footer';
import ProjectWall from './components/MainPage/projectWall';
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <Intro/>

        <ProjectWall/>

        <Outro/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
