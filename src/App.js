import './App.css';
import { Footer } from './component/Footer/Footer';
import { About } from './component/About/About';
import { Header } from './component/Header/Header';
import { Home } from './component/Home/Home';
import { Skills } from './component/Skills/Skills';
import { Projects } from './component/Projects/Projects';
function App() {
  return (
    <div className="App">
     <Header/>
     <main className='main'>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Footer/>
     </main>
    </div>
  );
}

export default App;
