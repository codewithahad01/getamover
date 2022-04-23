import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Duties from './components/Duties';
import Cards from './components/Cards';

function App() {
  return (
    <div className='w-full '>
      <Navbar />
      <Content />
      <Duties />
      <Cards />
    </div>
  );
}


export default App;
