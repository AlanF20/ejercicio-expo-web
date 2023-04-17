import { useContext, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { NotificationsContext } from './App';
import Input from './components/Input';
import Header from './Header';

export default function Formulario() {
  const nombre = ''
  const {notifications, setNotifications} = useContext(NotificationsContext)
  const [cita, setCita] = useState({
    isReaded: false
  })
  function handleClick (event) {
    event.preventDefault()
    toast.success("Cita añadida correctamente.", {
      style: {
        fontSize: '2rem'
      }
    })
    setNotifications([...notifications, cita])
  }
  function handleChange (e) {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <Header />
      <form className="form">
        <h2 className='form__title'>Citas para el consultorio dental Los 3 reyes magos👑🌟 </h2>
        <Input handleChange={handleChange} name='Nombre' placeholder='Ingrese el nombre del cliente' type='text' />
        <Input handleChange={handleChange} name='Fecha' placeholder='Ingrese la fecha para cita del cliente' type='date' />
        <Input handleChange={handleChange} name='Costo' placeholder='Ingrese el costo de la consulta del cliente' type='text' />
        <Input handleChange={handleChange} name='Descripcion' placeholder='Ingrese la descripcion de la cita' />
        <input onClick={handleClick} className='submit' type='submit' value='Registrar cita' />
        <Toaster />
      </form>
    </>
  )
}