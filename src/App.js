import './App.css';
import Nombre from './components/Nombre';
import Footer from './components/Footer';
import mifoto from './components/mifoto.jpg'

function App() {
  return (
    <div className="container">
    <main>
      <div>
        <img src={mifoto}/>
      </div>
      <div>
        <Nombre />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  </div>
  );
}

export default App;
