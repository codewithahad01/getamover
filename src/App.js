import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Duties from './components/Duties';
import Cards from './components/Cards';
import Countries from './components/Countries';
import Form from './components/Form';
import Reason from './components/Reason'

function App() {
  return (
    <div className='w-full '>
      <Navbar />
      <Content />
      <Duties />
      <Cards />
      <Countries />
      <Form />
      <Reason />
    </div>
  );
}


export default App;
