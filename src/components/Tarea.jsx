import { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs'
//Se pasan las props desestructuradas para una mejor visualizacion
const Tarea = ({ texto, eliminarTarea, id }) => {

  const [complete, setComplete] = useState(false);
//Este es un objeto html como una variable
const completeMsg = <>(Completada <BsCheckCircleFill color='#0f3'/>)</>


  return (
   <!--/en caso de que la tarea este completada, se le agrega la clase tareaCompletada, de otra manera no, este valor cambia al hacer click sobre el div de la tarea-->
    <div className={complete ? 'tarea tareaCompletada' : 'tarea'} onClick={() => setComplete(!complete)}>
      <p style={{display: 'flex', gap: '0.5em', alignItems: 'center'}}>
        <!--en caso de que no se le pase un valor a la prop de texto, se muestra el mensaje de Tarea Vacia-->
        {texto ? texto  : 'Tarea Vacia'}
En caso de que la tarea este completa, se agrega el mensaje que fue definido como variable
        <p>{complete ? completeMsg : null}</p>
      </p>
<!--se le pasa la funcion que borra la tarea tomando como atributo el id-->
    <RiDeleteBin6Line color='#fff' size={'1.2rem'} onClick={() => eliminarTarea(id)}/>
    </div>
  )
}

export default Tarea
