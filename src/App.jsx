import './App.css';
import Catalogue from './components/Catalogue';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
function App() {

  return (
    <div className="App" style={{ textAlign : "center" }}>
           <Header />
           <Counter start={10} />
           <Catalogue />
           <Footer />
    </div>

  );
}

export default App;
