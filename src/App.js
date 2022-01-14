import { useEffect, useState } from 'react';
import './App.css';
import Option from './Option';

function App() {

  const [array, setarray] = useState();
  const [arrayWait, setarrayWait] = useState([])
  const [input, setinput] = useState(null);
  const [i , seti] = useState(0)

  const addArray = () => {

    if (input > 0) {
      seti(i+1)
      if (array === undefined || array === null) {
        setarray({i: i+1, time: parseInt(input)});
      } else {
        setarrayWait([...arrayWait, {i: i+1, time: parseInt(input)}]);
      }
    }
  }

  useEffect(() => {


    if (array !== undefined && array !== null) {

      if (array.time > 0) {
        const timerId = setTimeout(() => {
          clearInterval(timerId); setarray({...array, time: array.time - 1});
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

  console.log(array)
  console.log(arrayWait)

  return (
    <div className="App">
      <div className='cart'>
        <header className='header'>
          <h3>Tareas FIFO</h3>
        </header>
        <div className='add'>
          <input placeholder='Tiempo de Tarea' onChange={e => setinput(parseInt(e.target.value))} className='input' type="number" />
          <button onClick={addArray} className='button'>AGREGAR TAREA</button>
        </div>
        {!!array && <Option el={array.time} i={array.i}/>}
        {(!!arrayWait && arrayWait.length > 0) && arrayWait.map((el, i) => <Option key={i} el={"En Espera"} aprox={el.time} i={el.i} />)}
      </div>
    </div>
  );
}

export default App;
