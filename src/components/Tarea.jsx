import { Fragment, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs'

const Tarea = ({ texto, eliminarTarea, id }) => {

  const [complete, setComplete] = useState(false);

const completeMsg = <>(Completada <BsCheckCircleFill color='#0f3'/>)</>


  return (
    <div className={complete ? 'tarea tareaCompletada' : 'tarea'} onClick={() => setComplete(!complete)}>
      <p style={{display: 'flex', gap: '0.5em', alignItems: 'center'}}>
        {texto ? texto  : 'Tarea Vacia'}
        <p>{complete ? completeMsg : null}</p>
      </p>
    <RiDeleteBin6Line color='#fff' size={'1.2rem'} onClick={() => eliminarTarea(id)}/>
    </div>
  )
}

export default Tarea