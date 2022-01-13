import { useEffect, useState } from 'react';
import './App.css';
import Option from './Option';

function App() {

  const [array, setarray] = useState();
  const [arrayWait, setarrayWait] = useState([])
  const [input, setinput] = useState(null);

  const addArray = () => {

    if (input > 0) {
      if (array === undefined || array === null) {
        setarray(parseInt(input));
      } else {
        setarrayWait([...arrayWait, parseInt(input)]);
      }
    }
  }

  useEffect(() => {


    if (array !== undefined && array !== null) {

      if (array > 0) {
        const timerId = setTimeout(() => {
          clearInterval(timerId); setarray(array - 1);
        }, 1000);
      } else {
        if (arrayWait.length > 0) {
          setarray(arrayWait[0])
          setarrayWait(arrayWait.slice(1, arrayWait.length));
        } else {
          setarray(null)
        }
      }
    }

  }, [array])

  console.log(arrayWait)
  console.log(array)





  return (
    <div className="App">
      <div className='cart'>
        <header className='header'>
          <h3>Tareas</h3>
        </header>
        <div className='add'>
          <input onChange={e => setinput(parseInt(e.target.value))} className='input' type="number" />
          <button onClick={addArray} className='button'>AGREGAR TAREA</button>
        </div>
        {!!array && <Option el={array} />}
        {(!!arrayWait && arrayWait.length > 0) && arrayWait.map((el, i) => <Option key={i} el={"En Espera"} />)}
      </div>
    </div>
  );
}

export default App;
