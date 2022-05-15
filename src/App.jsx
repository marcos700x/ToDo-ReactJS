import './App.scss';
import { IoAdd } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react';
//uuid es una libreria que genera id's irrepetibles
import { v4 as uuidv4 } from 'uuid';  
import Tarea from './components/Tarea';

function App() {

  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');
//Esta funcion lo que hace es ir recogiendo el valor del input conforme se vaya modificando
  const handleChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
  }
  //Esta funcion lo que hace es prevenir el reload del form por defecto y crear un objeto con un id y un texto determinado, el texto es determinado
  //por el input del usuario, y este objeto se pasa como parametro a la siguiente funcion llamada agregarTarea
  const handleSend = (e) =>{

    e.preventDefault();

    const tareaObj = {
      id: uuidv4(),
      texto: input,
    }
    agregarTarea(tareaObj);
    setInput("")
  } 
  //Esta funcion recibe como parametro un objeto, que es una tarea, con su id y su texto
  const agregarTarea = (tarea) =>{
    //se declara esta  variable y se le asigna el valor de el objeto recibido y los demas que vengan, todos desestructurados, esto es lo que hace el (...)
    var tareasNuevas = [tarea, ...tareas];
    //Se agregan las nuevas tareas al array de tareas inicial
    setTareas(tareasNuevas);
  }
  //Esta funcion lo que hace es borrar las tareas agregadas mediante el id generado por uuid
  //recibe como parametro el id de la tarea que se selecciona
  const eliminarTarea = (id) =>{
    //se declara la variable tareasFiltradas y se le asigna el valor del filtrado del array de las tareas, las que cumplan con la siguiente condicion
    //pasan al nuevo array que genera filter, en este caso es todos los id de los elementos que no sean iguales al id de la tarea seleccionada se mantienen
    //de lo contrario se eliminan, esta funcion sirve para poder eliminar elementos de un array basados en una caracterisica
    var tareasFiltradas = tareas.filter((elemento) => elemento.id !== id);
    //se agrega el nuevo array de tareas filtradas a las tareas, para mostrar el array filtrado
    setTareas(tareasFiltradas)
  }
  //Esta funcion previenela recarga por defecto del form, y tambien establece el estado de las tareas como un array vacío
  //haciendo así que todas las tareas que hayan sido agregadas se eliminan
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
         <!--Se hace un map con el array de tareas, el metodo map retorna un nuevo array sin modificar el original-->
          <!--Por cada elemento del array, se renderiza el componente tarea con las propiedades de cada objeto que recorre el array-->
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
