import './App.scss';
import { IoAdd } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  
import Tarea from './components/Tarea';

function App() {

  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleSend = (e) =>{

    e.preventDefault();

    const tareaObj = {
      id: uuidv4(),
      texto: input,
    }
    agregarTarea(tareaObj);
    setInput("")
  } 
  const agregarTarea = (tarea) =>{
    var tareasNuevas = [tarea, ...tareas];
    setTareas(tareasNuevas);
  }
  const eliminarTarea = (id) =>{
    var tareasFiltradas = tareas.filter((elemento) => elemento.id !== id);
    setTareas(tareasFiltradas)
  }
  const eliminarTodas = (e) =>{
    e.preventDefault();
    setTareas([])
  }

  return (
    <div className="App">
      <div className="contenedorToDo">
        <h1>Lista de tareas</h1>
        <div className="formTareas">
          <form>
          <input type="text" onChange={(e) => handleChange(e)} value={input} />
          <button onClick={(e) => handleSend(e)}><IoAdd color='#fff' size='1.2rem'/></button>
          <button className='removeButton' onClick={(e) => eliminarTodas(e)}><RiDeleteBin6Line color='#fff' size={'1.2rem'}/></button>
          </form>
        </div>
        <div className="listaTareas">
  {
    tareas.map((elemento) => 
    <Tarea
    texto = {elemento.texto}
    key = {elemento.id}
    id = {elemento.id}
    eliminarTarea = {eliminarTarea}
    />
    )
  }
       
        </div>
      </div>
    </div>
  );
}

export default App;
