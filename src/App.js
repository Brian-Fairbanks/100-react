import './App.css';
import './components/Header'
import Header from './components/Header';
import Intro from './components/Intro';
import Outro from './components/Outro';
import Footer from './components/Footer';
import ProjectWall from './components/projectWall';

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
